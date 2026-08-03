"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { testimonials } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

export async function createTestimonial(formData: FormData) {
  await db.insert(testimonials).values({
    quote: String(formData.get("quote") ?? ""),
    name: String(formData.get("name") ?? ""),
    avatarUrl: String(formData.get("avatarUrl") ?? ""),
    orderIndex: Number(formData.get("orderIndex") ?? 0),
  })
  revalidatePublicSite()
  redirect("/admin/testimonials")
}

export async function updateTestimonial(formData: FormData) {
  const id = Number(formData.get("id"))
  await db
    .update(testimonials)
    .set({
      quote: String(formData.get("quote") ?? ""),
      name: String(formData.get("name") ?? ""),
      avatarUrl: String(formData.get("avatarUrl") ?? ""),
      orderIndex: Number(formData.get("orderIndex") ?? 0),
    })
    .where(eq(testimonials.id, id))
  revalidatePublicSite()
  redirect("/admin/testimonials")
}

export async function deleteTestimonial(id: number) {
  await db.delete(testimonials).where(eq(testimonials.id, id))
  revalidatePublicSite()
}
