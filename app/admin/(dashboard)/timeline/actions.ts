"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { timelineItems } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

export async function createTimelineItem(formData: FormData) {
  await db.insert(timelineItems).values({
    year: String(formData.get("year") ?? ""),
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? "") || null,
    highlight: formData.get("highlight") === "on",
    orderIndex: Number(formData.get("orderIndex") ?? 0),
  })
  revalidatePublicSite()
  redirect("/admin/timeline")
}

export async function updateTimelineItem(formData: FormData) {
  const id = Number(formData.get("id"))
  await db
    .update(timelineItems)
    .set({
      year: String(formData.get("year") ?? ""),
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      imageUrl: String(formData.get("imageUrl") ?? "") || null,
      highlight: formData.get("highlight") === "on",
      orderIndex: Number(formData.get("orderIndex") ?? 0),
    })
    .where(eq(timelineItems.id, id))
  revalidatePublicSite()
  redirect("/admin/timeline")
}

export async function deleteTimelineItem(id: number) {
  await db.delete(timelineItems).where(eq(timelineItems.id, id))
  revalidatePublicSite()
}
