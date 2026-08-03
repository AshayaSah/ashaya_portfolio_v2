"use server"

import { eq } from "drizzle-orm"

import { db } from "@/db"
import { profile } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

function parseList(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export async function updateProfile(formData: FormData) {
  const id = Number(formData.get("id"))

  await db
    .update(profile)
    .set({
      fullName: String(formData.get("fullName") ?? ""),
      roles: parseList(formData.get("roles")),
      avatarUrl: String(formData.get("avatarUrl") ?? "") || null,
      homeSubheading: String(formData.get("homeSubheading") ?? ""),
      aboutHeading: String(formData.get("aboutHeading") ?? ""),
      aboutSubheading: String(formData.get("aboutSubheading") ?? ""),
      projectsHeading: String(formData.get("projectsHeading") ?? ""),
      projectsSubheading: String(formData.get("projectsSubheading") ?? ""),
      contactHeading: String(formData.get("contactHeading") ?? ""),
      contactSubheading: String(formData.get("contactSubheading") ?? ""),
      blogHeading: String(formData.get("blogHeading") ?? ""),
      blogSubheading: String(formData.get("blogSubheading") ?? ""),
      footerTagline: String(formData.get("footerTagline") ?? ""),
      updatedAt: new Date(),
    })
    .where(eq(profile.id, id))

  revalidatePublicSite()
}
