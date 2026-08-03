import { asc, desc, eq } from "drizzle-orm"

import { db } from "@/db"
import {
  blogPosts,
  collagePhotos,
  experiences,
  profile,
  projects,
  socialLinks,
  testimonials,
  timelineItems,
} from "@/db/schema"

export async function getProfile() {
  const [row] = await db.select().from(profile).limit(1)
  return row
}

export async function getSocialLinks() {
  return db.select().from(socialLinks).orderBy(asc(socialLinks.orderIndex))
}

export async function getProjects() {
  return db.select().from(projects).orderBy(asc(projects.orderIndex))
}

export async function getExperiences() {
  return db.select().from(experiences).orderBy(asc(experiences.orderIndex))
}

export async function getTestimonials() {
  return db.select().from(testimonials).orderBy(asc(testimonials.orderIndex))
}

export async function getTimelineGroupedByYear() {
  const items = await db
    .select()
    .from(timelineItems)
    .orderBy(desc(timelineItems.year), asc(timelineItems.orderIndex))

  const groups: { year: string; items: typeof items }[] = []
  for (const item of items) {
    const lastGroup = groups.at(-1)
    if (lastGroup && lastGroup.year === item.year) {
      lastGroup.items.push(item)
    } else {
      groups.push({ year: item.year, items: [item] })
    }
  }
  return groups
}

export async function getCollagePhotos() {
  return db.select().from(collagePhotos).orderBy(asc(collagePhotos.orderIndex))
}

export async function getBlogPosts() {
  return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt))
}

export async function getAllBlogSlugs() {
  return db.select({ slug: blogPosts.slug }).from(blogPosts)
}

export async function getBlogPostBySlug(slug: string) {
  const [row] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1)
  return row
}
