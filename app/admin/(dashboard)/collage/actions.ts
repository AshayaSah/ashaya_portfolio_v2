"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import { db } from "@/db"
import { collagePhotos } from "@/db/schema"
import { revalidatePublicSite } from "@/lib/revalidate"

export async function createCollagePhoto(formData: FormData) {
  await db.insert(collagePhotos).values({
    title: String(formData.get("title") ?? ""),
    imageUrl: String(formData.get("imageUrl") ?? ""),
    positionClass: String(formData.get("positionClass") ?? ""),
    orderIndex: Number(formData.get("orderIndex") ?? 0),
  })
  revalidatePublicSite()
  redirect("/admin/collage")
}

export async function updateCollagePhoto(formData: FormData) {
  const id = Number(formData.get("id"))
  await db
    .update(collagePhotos)
    .set({
      title: String(formData.get("title") ?? ""),
      imageUrl: String(formData.get("imageUrl") ?? ""),
      positionClass: String(formData.get("positionClass") ?? ""),
      orderIndex: Number(formData.get("orderIndex") ?? 0),
    })
    .where(eq(collagePhotos.id, id))
  revalidatePublicSite()
  redirect("/admin/collage")
}

export async function deleteCollagePhoto(id: number) {
  await db.delete(collagePhotos).where(eq(collagePhotos.id, id))
  revalidatePublicSite()
}
