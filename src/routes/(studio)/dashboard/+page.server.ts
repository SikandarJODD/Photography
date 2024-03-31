import { db } from "$lib/server";
import { chat } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    let session = await locals.auth.validate();
    if (session) {
        let chatUsers = await db.select().from(chat).where(eq(chat.receiver, session.user.username));
        let chatSender = await db.select().from(chat).where(eq(chat.sender, session.user.username));;
        return {
            chatUsers: chatUsers,
            chatSender: chatSender
        };
    }
};