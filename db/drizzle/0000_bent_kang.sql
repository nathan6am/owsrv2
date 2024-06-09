DO $$ BEGIN
 CREATE TYPE "public"."event_type" AS ENUM('league-race', 'special-event', 'community-race', 'hotlap', 'championship-series');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."game" AS ENUM('assetto-corsa', 'iracing', 'rfactor2', 'le-mans-ultimate', 'asseto-corsa-competizione');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."license" AS ENUM('A', 'B', 'C', 'S', 'R');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('admin', 'moderator', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"description" text,
	"game" "game",
	"image" text,
	"event_type" "event_type",
	"track" text,
	"date" timestamp,
	"time" text,
	"duration" integer,
	"license" "license" NOT NULL,
	"max_participants" integer,
	"config" jsonb,
	"tags" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"bio" text,
	"country" text,
	"driver_code" text,
	"avatar" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"guid" text,
	CONSTRAINT "users_guid_unique" UNIQUE("guid")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
