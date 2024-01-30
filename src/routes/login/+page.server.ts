// routes/login/+page.server.ts
import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";
import { fail } from "@sveltejs/kit";
import { z } from 'zod'
import { message, superValidate } from 'sveltekit-superforms/server'
let loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
})

import type { Actions } from "./$types";
export const load = async () => {
    let form = await superValidate(loginSchema);
    return { form };
};
export const actions: Actions = {
    default: async ({ request, locals }) => {
        let form = await superValidate(request, loginSchema);
        // console.log(form);


        let email = form.data.email;
        let password = form.data.password;

        if (!form.valid) {
            return fail(400, { form });
        }

        try {
            const user = await auth.useKey(
                "email",
                email.toLowerCase(),
                password
            );
            console.log(user, 'USER');

            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            locals.auth.setSession(session);
        } catch (e) {
            if (
                e instanceof LuciaError &&
                (e.message === "AUTH_INVALID_KEY_ID" ||
                    e.message === "AUTH_INVALID_PASSWORD")
            ) {
                // user does not exist
                // or invalid password
                return message(form, 'Incorrect Email or Password', {
                    status: 400,
                });
            }
            return fail(500, {
                message: "An unknown error occurred"
            });
        }
        return message(form, 'Logged in successfully');
    }
};