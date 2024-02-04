CREATE TABLE IF NOT EXISTS "chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"sender" text,
	"receiver" text,
	"desc" text,
	"type" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chat" ADD CONSTRAINT "chat_sender_auth_user_username_fk" FOREIGN KEY ("sender") REFERENCES "auth_user"("username") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
