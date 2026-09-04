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

const PLACEHOLDER_DESCRIPTIONS: Record<string, string> = {
  Japan: "Cherry blossoms and neon-lit streets.",
  Mauritius: "Turquoise lagoons and golden beaches.",
  Iceland: "Volcanic landscapes under the northern lights.",
  Norway: "Fjords carved deep into silent mountains.",
  "New Zealand": "Rolling green hills and epic wilderness.",
  Canada: "Endless forests and towering peaks.",
}

export function Collage({ photos }: { photos: CollagePhoto[] }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = React.useState<number | null>(null)

  const handleHoverChange = (id: number, hovered: boolean) => {
    setHoveredId((current) => (hovered ? id : current === id ? null : current))
  }

  return (
    <div className="px-4 py-6">
      <SectionHeading highlighted>Travelling is in my blood</SectionHeading>
      <DraggableCardContainer ref={containerRef}>
        {hoveredId !== null && (
          <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-background/40 backdrop-blur-sm transition-opacity duration-300" />
        )}
        {photos.map((photo) => {
          const isHovered = hoveredId === photo.id
          const description =
            photo.description ??
            PLACEHOLDER_DESCRIPTIONS[photo.title] ??
            `A memorable journey captured in ${photo.title}.`
          return (
            <DraggableCardBody
              key={photo.id}
              containerRef={containerRef}
              className={photo.positionClass}
              hovered={isHovered}
              onHoverChange={(h) => handleHoverChange(photo.id, h)}
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
              {isHovered && (
                <p className="pointer-events-none relative z-10 mt-2 text-center text-xs text-muted-foreground">
                  {description}
                </p>
              )}
              <div className="pointer-events-none absolute inset-0 bg-background opacity-0 select-none" />
            </DraggableCardBody>
          )
        })}
      </DraggableCardContainer>
    </div>
  )
}
