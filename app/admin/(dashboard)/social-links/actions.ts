"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { socialLinks } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

const ICONS = ["x", "linkedin", "github"] as const
type Icon = (typeof ICONS)[number]

function parseIcon(value: FormDataEntryValue | null): Icon {
  const str = String(value ?? "")
  return (ICONS as readonly string[]).includes(str) ? (str as Icon) : "x"
}

export async function createSocialLink(formData: FormData) {
  await db.insert(socialLinks).values({
    label: String(formData.get("label") ?? ""),
    href: String(formData.get("href") ?? ""),
    icon: parseIcon(formData.get("icon")),
    orderIndex: Number(formData.get("orderIndex") ?? 0),
  })
  revalidatePublicSite()
  redirect("/admin/social-links")
}

export async function updateSocialLink(formData: FormData) {
  const id = Number(formData.get("id"))
  await db
    .update(socialLinks)
    .set({
      label: String(formData.get("label") ?? ""),
      href: String(formData.get("href") ?? ""),
      icon: parseIcon(formData.get("icon")),
      orderIndex: Number(formData.get("orderIndex") ?? 0),
    })
    .where(eq(socialLinks.id, id))
  revalidatePublicSite()
  redirect("/admin/social-links")
}

export async function deleteSocialLink(id: number) {
  await db.delete(socialLinks).where(eq(socialLinks.id, id))
  revalidatePublicSite()
}
