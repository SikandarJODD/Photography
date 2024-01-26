import { db } from "$lib/server";
import { posts } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
    let user = url.pathname.split('/')[2];
    let userPosts = await db.select().from(posts).where(eq(posts.username, user));
    return {
        userPosts: userPosts
    }

};