"use client"

import Image from "next/image"
import * as React from "react"
import type { InferSelectModel } from "drizzle-orm"

import { SectionHeading } from "@/components/section-heading"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"
import type { collagePhotos } from "@/db/schema"

type CollagePhoto = InferSelectModel<typeof collagePhotos>

export function Collage({ photos }: { photos: CollagePhoto[] }) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="px-4 py-6">
      <SectionHeading highlighted>Travelling is in my blood</SectionHeading>
      <DraggableCardContainer ref={containerRef}>
        {photos.map((photo) => (
          <DraggableCardBody
            key={photo.id}
            containerRef={containerRef}
            className={photo.positionClass}
          >
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              width={320}
              height={160}
              className="pointer-events-none relative z-10 h-40 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-base font-bold text-foreground">
              {photo.title}
            </h3>
            <div className="pointer-events-none absolute inset-0 bg-background opacity-0 select-none" />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  )
}
