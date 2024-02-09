import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { profile, user } from "$lib/server/schema";
import { db } from "$lib/server";
import supabase from "$lib";
import { z } from 'zod';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { eq } from "drizzle-orm";

let signUpSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
})

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, "/");
    let form = await superValidate(signUpSchema);
    return { form };
};

export const actions: Actions = {
    default: async ({ request, locals, url }) => {
        let form = await superValidate(request, signUpSchema);

        if (!form.valid) {
            return fail(400, { form });
        }
        let isemailpresent = await db.select().from(user).where(eq(user.email, form.data.email));
        if (isemailpresent.length > 0) {
            // console.log('email already exists');
            return setError(form, 'email', 'E-mail already exists.');;
        }
        let email = form.data.email;
        let password = form.data.password;
        let username = form.data.username;
        username = username.split(" ").join("");
        let profileLink = url.origin + "/profiles/" + username;
        try {
            let user = await auth.createUser({
                key: {
                    providerId: "email", // auth method
                    providerUserId: email.toLowerCase(), // unique id when using "email" auth method
                    password, // hashed by Lucia

                },
                attributes: {
                    email: email,
                    username: username
                },
            });
            await db.insert(profile).values(
                {
                    username: username,
                    socialProfileLink: profileLink,
                    userImage: 'https://i.pinimg.com/564x/90/2b/84/902b841f3567ff8282b5db97c257aef1.jpg'
                }
            )
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            locals.auth.setSession(session); // set session cookie
        } catch (e) {
            console.log(e);
            return fail(500, {
                message: "An unknown error occurred"
            });
        }
        return { form };
    }
};