import Image from "next/image"
import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getTestimonials } from "@/db/queries"

import { deleteTestimonial } from "./actions"

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Testimonials</h1>
        <Button asChild size="sm">
          <Link href="/admin/testimonials/new">Add testimonial</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
                <Image
                  src={testimonial.avatarUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="line-clamp-1 text-sm text-muted-foreground">
                  {testimonial.quote}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/testimonials/${testimonial.id}/edit`}>Edit</Link>
              </Button>
              <DeleteButton action={deleteTestimonial.bind(null, testimonial.id)} />
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <p className="text-sm text-muted-foreground">No testimonials yet.</p>
        )}
      </div>
    </div>
  )
}
