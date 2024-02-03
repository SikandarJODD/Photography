CREATE TABLE IF NOT EXISTS "userDetailInfo" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"expert_in" text,
	"about" text,
	"skills" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userDetailInfo" ADD CONSTRAINT "userDetailInfo_user_id_auth_user_username_fk" FOREIGN KEY ("user_id") REFERENCES "auth_user"("username") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
