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
import {
  blogPostsSeed,
  collagePhotosSeed,
  experiencesSeed,
  profileSeed,
  projectsSeed,
  socialLinksSeed,
  testimonialsSeed,
  timelineSeed,
} from "@/db/seed-data"

async function main() {
  const existingProfile = await db.select().from(profile).limit(1)
  if (existingProfile.length === 0) {
    await db.insert(profile).values(profileSeed)
    console.log("seeded profile")
  } else {
    console.log("profile already exists, skipping")
  }

  const existingSocialLinks = await db.select().from(socialLinks).limit(1)
  if (existingSocialLinks.length === 0) {
    await db.insert(socialLinks).values(socialLinksSeed)
    console.log(`seeded social_links (${socialLinksSeed.length} rows)`)
  } else {
    console.log("social_links already has data, skipping")
  }

  const existingProjects = await db.select().from(projects).limit(1)
  if (existingProjects.length === 0) {
    await db.insert(projects).values(projectsSeed)
    console.log(`seeded projects (${projectsSeed.length} rows)`)
  } else {
    console.log("projects already has data, skipping")
  }

  const existingExperiences = await db.select().from(experiences).limit(1)
  if (existingExperiences.length === 0) {
    await db.insert(experiences).values(experiencesSeed)
    console.log(`seeded experiences (${experiencesSeed.length} rows)`)
  } else {
    console.log("experiences already has data, skipping")
  }

  const existingTestimonials = await db.select().from(testimonials).limit(1)
  if (existingTestimonials.length === 0) {
    await db.insert(testimonials).values(testimonialsSeed)
    console.log(`seeded testimonials (${testimonialsSeed.length} rows)`)
  } else {
    console.log("testimonials already has data, skipping")
  }

  const existingTimelineItems = await db.select().from(timelineItems).limit(1)
  if (existingTimelineItems.length === 0) {
    await db.insert(timelineItems).values(timelineSeed)
    console.log(`seeded timeline_items (${timelineSeed.length} rows)`)
  } else {
    console.log("timeline_items already has data, skipping")
  }

  const existingCollagePhotos = await db.select().from(collagePhotos).limit(1)
  if (existingCollagePhotos.length === 0) {
    await db.insert(collagePhotos).values(collagePhotosSeed)
    console.log(`seeded collage_photos (${collagePhotosSeed.length} rows)`)
  } else {
    console.log("collage_photos already has data, skipping")
  }

  const existingBlogPosts = await db.select().from(blogPosts).limit(1)
  if (existingBlogPosts.length === 0) {
    await db.insert(blogPosts).values(blogPostsSeed)
    console.log(`seeded blog_posts (${blogPostsSeed.length} rows)`)
  } else {
    console.log("blog_posts already has data, skipping")
  }

  console.log("done")
  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
