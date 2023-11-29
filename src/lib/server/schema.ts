// schema.js
import { pgTable, bigint, varchar, numeric, text, serial } from "drizzle-orm/pg-core";

export let user = pgTable("auth_user", {
    id: varchar("id", {
        length: 15 // change this when using custom user ids
    }).primaryKey(),
    email: varchar("email", {
        length: 30
    }).notNull(),
    username: varchar("username", {
        length: 40
    }).unique()
});

export const session = pgTable("user_session", {
    id: varchar("id", {
        length: 128
    }).primaryKey(),
    userId: varchar("user_id", {
        length: 15
    })
        .notNull()
        .references(() => user.id),
    activeExpires: bigint("active_expires", {
        mode: "number"
    }).notNull(),
    idleExpires: bigint("idle_expires", {
        mode: "number"
    }).notNull()
});

export const key = pgTable("user_key", {
    id: varchar("id", {
        length: 255
    }).primaryKey(),
    userId: varchar("user_id", {
        length: 15
    })
        .notNull()
        .references(() => user.id),
    hashedPassword: varchar("hashed_password", {
        length: 255
    })
});
export let profile = pgTable("profile", {
    id: serial("id").primaryKey().notNull(),
    username: text("username").references(() => user.username),
    firstName: text("firstName"),
    desc: text("description"),
    userImage: text("user_image"),
    followers: numeric("followers").default('0'),
    totalImages: numeric("total_images").default('0'),
    socialInsta: text("insta"),
    socialLinked: text("linked"),
    socialTweet: text("tweet"),
    socialProfileLink: text('profile_link')
})
export let allposts = pgTable("posts", {
    id: serial("id").primaryKey().notNull(),
    img: text("imgurl"),
    caption: text("caption"),
    username: text("username")
})