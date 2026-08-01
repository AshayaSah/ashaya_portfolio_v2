"use client"

import Image from "next/image"
import * as React from "react"

import { SectionHeading } from "@/components/section-heading"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"

const collageItems = [
  {
    title: "Japan",
    image: "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=800&auto=format&fit=crop",
    className: "top-10 left-0 rotate-[-5deg]",
  },
  {
    title: "Mauritius",
    image: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=800&auto=format&fit=crop",
    className: "top-40 left-[15%] rotate-[-7deg]",
  },
  {
    title: "Iceland",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    className: "top-5 left-[50%] rotate-[8deg]",
  },
  {
    title: "Japan",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop",
    className: "top-32 left-[85%] rotate-[10deg]",
  },
  {
    title: "Norway",
    image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=800&auto=format&fit=crop",
    className: "top-20 right-[15%] rotate-[2deg]",
  },
  {
    title: "New Zealand",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&auto=format&fit=crop",
    className: "top-24 left-[25%] rotate-[-7deg]",
  },
  {
    title: "Canada",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    className: "top-8 left-[30%] rotate-[4deg]",
  },
]

export function Collage() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="px-4 py-6">
      <SectionHeading highlighted>Travelling is in my blood</SectionHeading>
      <DraggableCardContainer ref={containerRef}>
        {collageItems.map((item, index) => (
          <DraggableCardBody
            key={`${item.title}-${index}`}
            containerRef={containerRef}
            className={item.className}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={160}
              className="pointer-events-none relative z-10 h-40 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-base font-bold text-foreground">
              {item.title}
            </h3>
            <div className="pointer-events-none absolute inset-0 bg-background opacity-0 select-none" />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  )
}
