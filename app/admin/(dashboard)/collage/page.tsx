import Image from "next/image"
import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getCollagePhotos } from "@/db/queries"

import { deleteCollagePhoto } from "./actions"

export default async function AdminCollagePage() {
  const photos = await getCollagePhotos()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Collage Photos</h1>
        <Button asChild size="sm">
          <Link href="/admin/collage/new">Add photo</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={photo.imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{photo.title}</p>
                <p className="text-sm text-muted-foreground">{photo.positionClass}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/collage/${photo.id}/edit`}>Edit</Link>
              </Button>
              <DeleteButton action={deleteCollagePhoto.bind(null, photo.id)} />
            </div>
          </div>
        ))}
        {photos.length === 0 && (
          <p className="text-sm text-muted-foreground">No photos yet.</p>
        )}
      </div>
    </div>
  )
}
