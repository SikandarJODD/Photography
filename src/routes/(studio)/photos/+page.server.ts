import { db } from "$lib/server";
import { posts } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ setHeaders }) => {
    let allposts = await db.select().from(posts);
    setHeaders({ "Cache-Control": "max-age=3600" });
    return {
        uposts: allposts
    }
};