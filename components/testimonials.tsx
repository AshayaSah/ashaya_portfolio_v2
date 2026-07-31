"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"

import { SectionHeading } from "@/components/section-heading"
import { testimonials } from "@/lib/data"

function TestimonialCard({
  quote,
  name,
  avatar,
}: {
  quote: string
  name: string
  avatar: string
}) {
  return (
    <div className="mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700 dark:text-neutral-200">{quote}</p>
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={name}
          width={16}
          height={16}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-300">{name}</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <div className="my-4 px-4 py-4">
      <SectionHeading className="mb-4">People love my work</SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee pauseOnHover className="py-4" gradient={false}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
