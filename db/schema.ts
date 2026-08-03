import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core"

export const socialIcon = pgEnum("social_icon", ["x", "linkedin", "github"])

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  roles: text("roles").array().notNull(),
  avatarUrl: text("avatar_url"),
  homeSubheading: text("home_subheading").notNull(),
  aboutHeading: text("about_heading").notNull(),
  aboutSubheading: text("about_subheading").notNull(),
  projectsHeading: text("projects_heading").notNull(),
  projectsSubheading: text("projects_subheading").notNull(),
  contactHeading: text("contact_heading").notNull(),
  contactSubheading: text("contact_subheading").notNull(),
  blogHeading: text("blog_heading").notNull(),
  blogSubheading: text("blog_subheading").notNull(),
  footerTagline: text("footer_tagline").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  href: text("href").notNull(),
  icon: socialIcon("icon").notNull(),
  orderIndex: integer("order_index").default(0).notNull(),
})

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  href: text("href").notNull(),
  stack: text("stack").array().notNull(),
  orderIndex: integer("order_index").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  logoUrl: text("logo_url"),
  invertDark: boolean("invert_dark").default(false).notNull(),
  stack: text("stack").array().notNull(),
  orderIndex: integer("order_index").default(0).notNull(),
})

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),
  name: text("name").notNull(),
  avatarUrl: text("avatar_url").notNull(),
  orderIndex: integer("order_index").default(0).notNull(),
})

export const timelineItems = pgTable("timeline_items", {
  id: serial("id").primaryKey(),
  year: text("year").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  highlight: boolean("highlight").default(false).notNull(),
  orderIndex: integer("order_index").default(0).notNull(),
})

export const collagePhotos = pgTable("collage_photos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  positionClass: text("position_class").notNull(),
  orderIndex: integer("order_index").default(0).notNull(),
})

export const blogPosts = pgTable(
  "blog_posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    date: text("date").notNull(),
    excerpt: text("excerpt").notNull(),
    imageUrl: text("image_url").notNull(),
    contentMarkdown: text("content_markdown").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [uniqueIndex("blog_posts_slug_idx").on(table.slug)]
)
