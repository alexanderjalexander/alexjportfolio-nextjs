-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "creators" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "videos" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	"youtube_id" varchar(11) NOT NULL,
	"publish_date" date NOT NULL,
	"commission_for" integer,
	CONSTRAINT "videos_youtube_id_key" UNIQUE("youtube_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" integer PRIMARY KEY NOT NULL,
	"category" varchar(35) NOT NULL,
	CONSTRAINT "categories_category_key" UNIQUE("category")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "skill_category" (
	"category" integer NOT NULL,
	"skill" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "skills" (
	"id" integer PRIMARY KEY NOT NULL,
	"skill" varchar(35) NOT NULL,
	CONSTRAINT "skills_skill_key" UNIQUE("skill")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "videos" ADD CONSTRAINT "videos_commission_for_fkey" FOREIGN KEY ("commission_for") REFERENCES "public"."creators"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "skill_category" ADD CONSTRAINT "skill_category_category_fkey" FOREIGN KEY ("category") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "skill_category" ADD CONSTRAINT "skill_category_skill_fkey" FOREIGN KEY ("skill") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/