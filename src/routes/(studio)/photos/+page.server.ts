import { db } from "$lib/server";
import { posts } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    let allposts = await db.select().from(posts);

    return {
        uposts: allposts
    }
};