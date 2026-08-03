import { createTestimonial } from "../actions"
import { TestimonialForm } from "../testimonial-form"

export default function NewTestimonialPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add testimonial</h1>
      <TestimonialForm action={createTestimonial} />
    </div>
  )
}
