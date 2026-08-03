import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type TestimonialFormValues = {
  id?: number
  quote?: string
  name?: string
  avatarUrl?: string
  orderIndex?: number
}

export function TestimonialForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: TestimonialFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-xl flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <ImageUploadField
        name="avatarUrl"
        label="Avatar"
        folder="testimonials"
        defaultValue={defaultValues?.avatarUrl}
        required
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="quote">Quote</Label>
        <Textarea id="quote" name="quote" defaultValue={defaultValues?.quote} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" defaultValue={defaultValues?.name} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="orderIndex">Order</Label>
        <Input
          id="orderIndex"
          name="orderIndex"
          type="number"
          defaultValue={defaultValues?.orderIndex ?? 0}
        />
      </div>

      <Button type="submit" className="w-fit">
        Save
      </Button>
    </form>
  )
}
