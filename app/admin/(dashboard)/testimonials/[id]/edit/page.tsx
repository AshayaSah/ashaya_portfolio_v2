import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { testimonials } from "@/db/schema"

import { updateTestimonial } from "../../actions"
import { TestimonialForm } from "../../testimonial-form"

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [testimonial] = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.id, Number(id)))
    .limit(1)

  if (!testimonial) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit testimonial</h1>
      <TestimonialForm action={updateTestimonial} defaultValues={testimonial} />
    </div>
  )
}
