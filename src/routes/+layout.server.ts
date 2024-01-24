import { posts, profile } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import { db } from "$lib/server";

export const load = async ({ locals }) => {
    const session = await locals.auth.validate();
    let allprofiles = await db.select().from(profile);
    if (session) {
        let userPosts = await db.select().from(posts).where(eq(posts.username, session.user.username));
        console.log(userPosts, 'User Posts');

        let userName = session.user.username;
        console.log(userName, 'User name');
        let userProfile = await db.select().from(profile).where(eq(profile.username, userName));
        return {
            email: session.user.email,
            username: session.user.username,
            userProfile: userProfile[0],
            allprofiles: allprofiles,
            allposts: userPosts
        };
    }
    return {
        email: '',
        username: '',
        userProfile: {},
        allprofiles: allprofiles,
        allposts: []
    };
};