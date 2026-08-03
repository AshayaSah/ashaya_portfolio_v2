import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { collagePhotos } from "@/db/schema"

import { updateCollagePhoto } from "../../actions"
import { CollageForm } from "../../collage-form"

export default async function EditCollagePhotoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [photo] = await db
    .select()
    .from(collagePhotos)
    .where(eq(collagePhotos.id, Number(id)))
    .limit(1)

  if (!photo) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit photo</h1>
      <CollageForm action={updateCollagePhoto} defaultValues={photo} />
    </div>
  )
}
