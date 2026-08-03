"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { blogPosts } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export async function createBlogPost(formData: FormData) {
  const title = String(formData.get("title") ?? "")
  const rawSlug = String(formData.get("slug") ?? "").trim()
  const slug = rawSlug ? slugify(rawSlug) : slugify(title)

  await db.insert(blogPosts).values({
    title,
    slug,
    date: String(formData.get("date") ?? ""),
    excerpt: String(formData.get("excerpt") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? ""),
    contentMarkdown: String(formData.get("contentMarkdown") ?? ""),
  })
  revalidatePublicSite()
  redirect("/admin/blog")
}

export async function updateBlogPost(formData: FormData) {
  const id = Number(formData.get("id"))
  const title = String(formData.get("title") ?? "")
  const rawSlug = String(formData.get("slug") ?? "").trim()
  const slug = rawSlug ? slugify(rawSlug) : slugify(title)

  await db
    .update(blogPosts)
    .set({
      title,
      slug,
      date: String(formData.get("date") ?? ""),
      excerpt: String(formData.get("excerpt") ?? ""),
      imageUrl: String(formData.get("imageUrl") ?? ""),
      contentMarkdown: String(formData.get("contentMarkdown") ?? ""),
      updatedAt: new Date(),
    })
    .where(eq(blogPosts.id, id))
  revalidatePublicSite()
  redirect("/admin/blog")
}

export async function deleteBlogPost(id: number) {
  await db.delete(blogPosts).where(eq(blogPosts.id, id))
  revalidatePublicSite()
}
