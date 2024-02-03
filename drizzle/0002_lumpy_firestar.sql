ALTER TABLE "featuresStuff" ADD COLUMN "user_id" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "featuresStuff" ADD CONSTRAINT "featuresStuff_user_id_auth_user_username_fk" FOREIGN KEY ("user_id") REFERENCES "auth_user"("username") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
