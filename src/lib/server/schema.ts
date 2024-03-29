// schema.js
import { pgTable, bigint, varchar, numeric, text, serial, json } from "drizzle-orm/pg-core";

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
    totalImages: numeric("total_images").default('0'),
    socialInsta: text("insta"),
    socialLinked: text("linked"),
    socialTweet: text("tweet"),
    socialProfileLink: text('profile_link')
})
export let posts = pgTable("posts", {
    id: serial("id").primaryKey().notNull(),
    img: text("imgurl"),
    caption: text("caption"),
    username: text("username").references(() => user.username),
})
export let brocode = pgTable("brocode", {
    id: serial("id").primaryKey().notNull(),
    brocode: text("brocode"),
    age: numeric("age"),
})

export let featureStuff = pgTable("featuresStuff", {
    id: serial("id").primaryKey().notNull(),
    username: text("user_id").references(() => user.username),
    type: text("type"),
    pic: numeric("pic"),
    price: numeric("price"),
    delivery: numeric("delivery"),
    revision: numeric("revision"),
    desc: text("desc"),
    features: text("features"),
});

export let userDetailInfo = pgTable("userDetailInfo", {
    id: serial("id").primaryKey().notNull(),
    username: text("user_id").references(() => user.username),
    expertIn: text("expert_in"),
    about: text("about"),
    skills: text("skills"),
});
// sender id as username , receiver id as photographers username 
// text desc about the message and type as basic , standard , premium
export let chat = pgTable("chat", {
    id: serial("id").primaryKey().notNull(),
    sender: text("sender").references(() => user.username),
    receiver: text("receiver"),
    desc: text("desc"),
    type: text("type"),
});