import { PUBLIC_BUCKET_NAME } from "$env/static/public";
import supabase from "$lib";
import { db } from "$lib/server";
import { posts, profile } from "$lib/server/schema";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { eq } from "drizzle-orm";
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } from '$env/static/private';
import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

cloudinary.config({
    cloud_name: PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});


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
            const arrayBuffer = await image.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            const uploadStream = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({}, function (error, result) {
                        if (error) {
                            return reject(error);
                        }
                        return resolve(result);
                    })
                    .end(buffer);
            });
            imgURL = uploadStream.url;
            await db.insert(posts).values({
                img: String(imgURL),
                caption: String(caption),
                username: String(username),
            })
            // update the profile post count
            let postcnt = await db.select({
                totalImages: profile.totalImages
            }).from(profile).where(eq(profile.username, username));
            let postcnt1 = Number(postcnt[0].totalImages) + 1;
            await db.update(profile).set({
                totalImages: String(postcnt1)
            }).where(eq(profile.username, username));
            return { success: true };
        }
    }
}
