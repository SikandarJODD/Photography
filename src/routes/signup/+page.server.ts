import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";


import type { PageServerLoad, Actions } from "./$types";
import { profile } from "$lib/server/schema";
import { db } from "$lib/server";
import supabase from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ request, locals, url }) => {
        let formData = await request.formData();
        let email = formData.get("email");
        let password = formData.get("password");
        let username = String(formData.get("username"));
        username = username.replace(' ', '_');
        // console.log(username, ' ', email, ' ', password, 'Create Account');
        let profileLink = url.origin + "/profiles/" + username;
        console.log('profile Link', profileLink);

        // basic check
        if (
            typeof email !== "string" ||
            email.length < 4 ||
            email.length > 31
        ) {
            return fail(400, {
                message: "Invalid Email"
            });
        }
        if (
            typeof password !== "string" ||
            password.length < 6 ||
            password.length > 255
        ) {
            return fail(400, {
                message: "Invalid password"
            });
        }
        try {
            let user = await auth.createUser({
                key: {
                    providerId: "email", // auth method
                    providerUserId: email.toLowerCase(), // unique id when using "email" auth method
                    password, // hashed by Lucia

                },
                attributes: {
                    email: String(email),
                    username: String(username)
                },
            });
            await db.insert(profile).values(
                {
                    username: String(username),
                    socialProfileLink: String(profileLink),
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
        throw redirect(302, "/edit");
    }
};