CREATE TYPE "public"."social_icon" AS ENUM('x', 'linkedin', 'github');--> statement-breakpoint
CREATE TABLE "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"date" text NOT NULL,
	"excerpt" text NOT NULL,
	"image_url" text NOT NULL,
	"content_markdown" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "collage_photos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image_url" text NOT NULL,
	"position_class" text NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" text NOT NULL,
	"role" text NOT NULL,
	"duration" text NOT NULL,
	"description" text NOT NULL,
	"logo_url" text,
	"invert_dark" boolean DEFAULT false NOT NULL,
	"stack" text[] NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"roles" text[] NOT NULL,
	"avatar_url" text,
	"home_subheading" text NOT NULL,
	"about_heading" text NOT NULL,
	"about_subheading" text NOT NULL,
	"projects_heading" text NOT NULL,
	"projects_subheading" text NOT NULL,
	"contact_heading" text NOT NULL,
	"contact_subheading" text NOT NULL,
	"blog_heading" text NOT NULL,
	"blog_subheading" text NOT NULL,
	"footer_tagline" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"href" text NOT NULL,
	"stack" text[] NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "social_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"href" text NOT NULL,
	"icon" "social_icon" NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"quote" text NOT NULL,
	"name" text NOT NULL,
	"avatar_url" text NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "timeline_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text,
	"highlight" boolean DEFAULT false NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "blog_posts_slug_idx" ON "blog_posts" USING btree ("slug");