import { PUBLIC_BUCKET_NAME } from "$env/static/public";
import supabase from "$lib";
import { db } from "$lib/server";
import { profile } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request, locals }) => {
        let session = await locals.auth.validate();
        if (session) {
            let username = session.user.username
            let form = await request.formData();
            console.log(form);
            let name = form.get('name');
            let desc = form.get('desc');
            let insta = form.get('insta');
            let tweet = form.get('twitter');
            let linked = form.get('linked')
            let image = form.get('inputImage');
            let randomString = crypto.randomUUID().slice(0, 8) + ".jpg";
            console.log(username, 'USERNAME');

            console.log('randomString', randomString);

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
                    await db.update(profile).set({
                        firstName: String(name),
                        userImage: String(imgURL),
                        desc: String(desc),
                        socialInsta: String(insta),
                        socialLinked: String(linked),
                        socialTweet: String(tweet)
                    }).where(eq(profile.username, String(username)));
                }
            }
        }
    },
    // basic: async ({ request }) => {
    //     let form = await request.formData();
    //     console.log(form, 'Basic Form');
    //     // let smLen = form.get('basic-feature-len');
    //     // for (let i = 0; i < Number(smLen); i++) {
    //     //     let sm = form.get(`revision-work-${i}`);
    //     //     console.log(sm);
    //     // }

    // }
};