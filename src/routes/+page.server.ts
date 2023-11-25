// routes/+page.server.ts
import { redirect, fail } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { Actions, PageServerLoad } from "./$types";
import { db } from "$lib/server";
import { profile } from "$lib/server/schema";
import { eq } from "drizzle-orm";


// export const load: PageServerLoad = async ({ locals }) => {
//     const session = await locals.auth.validate();
//     if (session) {
//         let userName = session.user.username;
//         console.log(userName, 'User name');

//         let userProfile = await db.select().from(profile).where(eq(profile.username, userName));
//         console.log(userProfile[0], 'USER PROFILE');
//         return {
//             email: session.user.email,
//             username: session.user.username,
//             userProfile: Object(userProfile[0])
//         };
//     }
//     else {
//         return {
//             email: '',
//             username: '',
//             userProfile: {}
//         };
//     }
// };
export const actions: Actions = {
    logout: async ({ locals }) => {
        const session = await locals.auth.validate();
        if (!session) return fail(401);
        await auth.invalidateSession(session.sessionId); // invalidate session
        locals.auth.setSession(null); // remove cookie
        throw redirect(302, "/"); // redirect to login page
    }
};