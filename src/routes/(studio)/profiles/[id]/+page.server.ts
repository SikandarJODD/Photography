import { db } from "$lib/server";
import { featureStuff, posts, userDetailInfo } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, params }) => {
    let userd = params.id;

    let userPosts = await db.select().from(posts).where(eq(posts.username, userd));
    let fprofilUser = await db.select().from(featureStuff).where(eq(featureStuff.username, userd));
    let fdetails = await db.select().from(userDetailInfo).where(eq(userDetailInfo.username, userd));

    return {
        userPosts: userPosts,
        fprofilUser: fprofilUser,
        fdetails: fdetails[0]
    }
};