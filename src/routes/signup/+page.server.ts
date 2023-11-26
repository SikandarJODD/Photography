import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";


import type { PageServerLoad, Actions } from "./$types";
import { profile } from "$lib/server/schema";
import { db } from "$lib/server";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ request, locals, url }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const username = formData.get("username");
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
            locals.auth.setSession(session); // set session cookie
        } catch (e) {
            console.log(e);
            return fail(500, {
                message: "An unknown error occurred"
            });
        }
        // redirect to
        // make sure you don't throw inside a try/catch block!
        throw redirect(302, "/profiles");
    }
};