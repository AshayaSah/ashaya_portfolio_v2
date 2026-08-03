"use client"

import Image from "next/image"
import type { InferSelectModel } from "drizzle-orm"
import Marquee from "react-fast-marquee"

import { SectionHeading } from "@/components/section-heading"
import type { testimonials as testimonialsTable } from "@/db/schema"

type Testimonial = InferSelectModel<typeof testimonialsTable>

function TestimonialCard({ quote, name, avatarUrl }: Testimonial) {
  return (
    <div className="mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md">
      <p className="text-sm text-foreground">{quote}</p>
      <div className="flex items-center gap-2">
        <Image
          src={avatarUrl}
          alt={name}
          width={16}
          height={16}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-muted-foreground">{name}</p>
      </div>
    </div>
  )
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="my-4 px-4 py-4">
      <SectionHeading className="mb-4">People love my work</SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee pauseOnHover className="py-4" gradient={false}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
