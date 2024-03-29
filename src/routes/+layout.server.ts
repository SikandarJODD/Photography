import { featureStuff, posts, profile, userDetailInfo } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import { db } from "$lib/server";

export const load = async ({ locals }) => {
    const session = await locals.auth.validate();
    let allprofiles = await db.select().from(profile);
    let allPosts = await db.select().from(posts);
    if (session) {
        let userName = session.user.username;
        let featuresProfile = await db.select().from(featureStuff).where(eq(featureStuff.username, userName));
        let userDetailedInfo = await db.select().from(userDetailInfo).where(eq(userDetailInfo.username, userName));
        // console.log(userName, 'User name');
        let userProfile = await db.select().from(profile).where(eq(profile.username, userName));
        return {
            email: session.user.email,
            username: session.user.username,
            userProfile: userProfile[0],
            allprofiles: allprofiles,
            allposts: allPosts,
            featuresProfile: featuresProfile,
            userDetailedInfo: userDetailedInfo[0]
        };
    }
    return {
        email: '',
        username: '',
        userProfile: {},
        allprofiles: allprofiles,
        allposts: allPosts,
        featuresProfile: [],
        userDetailedInfo: []
    };
};