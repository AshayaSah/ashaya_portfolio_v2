"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { experiences } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

function parseStack(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export async function createExperience(formData: FormData) {
  await db.insert(experiences).values({
    company: String(formData.get("company") ?? ""),
    role: String(formData.get("role") ?? ""),
    duration: String(formData.get("duration") ?? ""),
    description: String(formData.get("description") ?? ""),
    logoUrl: String(formData.get("logoUrl") ?? "") || null,
    invertDark: formData.get("invertDark") === "on",
    stack: parseStack(formData.get("stack")),
    orderIndex: Number(formData.get("orderIndex") ?? 0),
  })
  revalidatePublicSite()
  redirect("/admin/experiences")
}

export async function updateExperience(formData: FormData) {
  const id = Number(formData.get("id"))
  await db
    .update(experiences)
    .set({
      company: String(formData.get("company") ?? ""),
      role: String(formData.get("role") ?? ""),
      duration: String(formData.get("duration") ?? ""),
      description: String(formData.get("description") ?? ""),
      logoUrl: String(formData.get("logoUrl") ?? "") || null,
      invertDark: formData.get("invertDark") === "on",
      stack: parseStack(formData.get("stack")),
      orderIndex: Number(formData.get("orderIndex") ?? 0),
    })
    .where(eq(experiences.id, id))
  revalidatePublicSite()
  redirect("/admin/experiences")
}

export async function deleteExperience(id: number) {
  await db.delete(experiences).where(eq(experiences.id, id))
  revalidatePublicSite()
}
