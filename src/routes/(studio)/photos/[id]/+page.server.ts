import type { PageServerLoad } from "./$types";
import { db } from "$lib/server";
import { posts, profile } from "$lib/server/schema";
import { eq } from "drizzle-orm";
export const load: PageServerLoad = async ({ params, setHeaders }) => {
    let routePost = await db.select().from(posts).where(eq(posts.id, Number(params.id)));
    let userRouteID = routePost[0].username;
    let rPosts = await db.select().from(posts).where(eq(posts.username, String(userRouteID))).limit(8);
    let userRouteDetial = await db.select().from(profile).where(eq(profile.username, String(userRouteID)));
    setHeaders({ "Cache-Control": "max-age=1800" });
    return {
        rpost: routePost[0],
        rprofile: userRouteDetial[0],
        rallPosts: rPosts
    }
};