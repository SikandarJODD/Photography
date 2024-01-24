import { PUBLIC_BUCKET_NAME } from "$env/static/public";
import supabase from "$lib";
import { db } from "$lib/server";
import { posts, profile } from "$lib/server/schema";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { eq } from "drizzle-orm";

export const actions: Actions = {
    default: async ({ request, locals }) => {
        let session = await locals.auth.validate();
        if (session) {
            let username = session.user.username
            updatePostCount(username);
            let form = await request.formData();
            let caption = form.get('caption');
            let image = form.get('uploadedImage');
            let randomString = crypto.randomUUID().slice(0, 10) + ".jpg";
            let imgURL = '';
            console.log(username, caption, image, randomString);
            try {
                const { data, error } = await supabase
                    .storage
                    .from(PUBLIC_BUCKET_NAME)
                    .upload(randomString, image)
                console.log('Uplaoded Data', data);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                console.log('Form Submitted Successfully');
                try {
                    let { data } = supabase.storage.from(PUBLIC_BUCKET_NAME).getPublicUrl(randomString);
                    imgURL = data.publicUrl;
                }
                finally {
                    console.log('working ?');

                    await db.insert(posts).values({
                        img: String(imgURL),
                        caption: String(caption),
                        username: String(username),
                    })
                }
                throw redirect(302, '/photos');
            }
        }
    }
}

let updatePostCount = async (username: string) => {
    let postcnt = await db.select({
        totalImages: profile.totalImages
    }).from(profile).where(eq(profile.username, username));
    let postcnt1 = Number(postcnt[0].totalImages) + 1;
    await db.update(profile).set({
        totalImages: String(postcnt1)
    }).where(eq(profile.username, username));


}