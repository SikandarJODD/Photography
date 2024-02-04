import { PUBLIC_BUCKET_NAME } from "$env/static/public";
import supabase from "$lib";
import { db } from "$lib/server";
import { featureStuff, profile, userDetailInfo } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
export const load: PageServerLoad = async ({ locals }) => {
    let session = await locals.auth.validate();
    if (session) {
        let username = session.user.username;
        let data = await db.select().from(profile).where(eq(profile.username, String(username)));
        let feature = await db.select().from(featureStuff).where(eq(featureStuff.username, String(username)));
        let userDetail = await db.select().from(userDetailInfo).where(eq(userDetailInfo.username, String(username)));
        // console.log('Data', data);
        // console.log('Feature', feature);
        // console.log('User Detail', userDetail);
        return {
            info: data[0],
            feature: feature[0],
            userDetail: userDetail[0]
        }
    }
    else {
        redirect(302, '/login');
    }


}

export const actions: Actions = {
    profileForm: async ({ request, locals }) => {
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
            if (image.size === 0) {
                await db.update(profile).set({
                    firstName: String(name),
                    desc: String(desc),
                    socialInsta: String(insta),
                    socialLinked: String(linked),
                    socialTweet: String(tweet)
                }).where(eq(profile.username, String(username)));
            }
            else {
                let randomString = crypto.randomUUID().slice(0, 8) + ".jpg";
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
        }
    },
    basic: async ({ request, locals }) => {
        let session = await locals.auth.validate();
        if (session) {
            let username = session.user.username;

            let form = await request.formData();
            console.log(form, 'Basic Form');
            let type = form.get('typefeature');
            let pic = Number(form.get('pictures'));
            let price = Number(form.get('price'));
            let delivery = Number(form.get('delivery-time'));
            let revision = Number(form.get('revision-work'));
            let desc = form.get('desc-feature');
            let bfeatures = form.get('bfeatures');

            await db.insert(featureStuff).values({
                username: String(username),
                type: String(type),
                pic: Number(pic),
                price: Number(price),
                delivery: Number(delivery),
                revision: Number(revision),
                desc: String(desc),
                features: String(bfeatures),
            })

        }

    },
    userDetail: async ({ request, locals }) => {
        let session = await locals.auth.validate();
        if (session) {
            let username = session.user.username;

            let form = await request.formData();
            console.log(form, 'User Detail Form');
            let expertIn = form.get('expert_feild');
            let about = form.get('user_d_info');
            let skills = form.get('user_skills');

            await db.insert(userDetailInfo).values({
                username: String(username),
                expertIn: String(expertIn),
                about: String(about),
                skills: (skills),
            })
        }

    }
};