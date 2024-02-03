CREATE TABLE IF NOT EXISTS "featuresStuff" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" text,
	"pic" numeric,
	"price" numeric,
	"delivery" numeric,
	"revision" numeric,
	"desc" text,
	"features" text
);
