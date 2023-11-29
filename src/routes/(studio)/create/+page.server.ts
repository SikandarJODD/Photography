import { PUBLIC_BUCKET_NAME } from "$env/static/public";
import supabase from "$lib";
import { db } from "$lib/server";
import { allposts } from "$lib/server/schema";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request, locals }) => {
        let session = await locals.auth.validate();
        if (session) {
            let username = session.user.username
            let form = await request.formData();
            let caption = form.get('caption');
            let image = form.get('uploadedImage');
            let randomString = crypto.randomUUID().slice(0, 10) + ".jpg";
            let imgURL = '';
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
                    await db.insert(allposts).values({
                        img: String(imgURL),
                        caption: String(caption),
                        username: username,
                    })
                    throw redirect(302, '/photos');
                }
            }
        }
    }
}