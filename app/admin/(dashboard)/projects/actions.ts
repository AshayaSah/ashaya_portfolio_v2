"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { projects } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

function parseStack(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export async function createProject(formData: FormData) {
  await db.insert(projects).values({
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? ""),
    href: String(formData.get("href") ?? ""),
    stack: parseStack(formData.get("stack")),
    orderIndex: Number(formData.get("orderIndex") ?? 0),
  })
  revalidatePublicSite()
  redirect("/admin/projects")
}

export async function updateProject(formData: FormData) {
  const id = Number(formData.get("id"))
  await db
    .update(projects)
    .set({
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      imageUrl: String(formData.get("imageUrl") ?? ""),
      href: String(formData.get("href") ?? ""),
      stack: parseStack(formData.get("stack")),
      orderIndex: Number(formData.get("orderIndex") ?? 0),
      updatedAt: new Date(),
    })
    .where(eq(projects.id, id))
  revalidatePublicSite()
  redirect("/admin/projects")
}

export async function deleteProject(id: number) {
  await db.delete(projects).where(eq(projects.id, id))
  revalidatePublicSite()
}
