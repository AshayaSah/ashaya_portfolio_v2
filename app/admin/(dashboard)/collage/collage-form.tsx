import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type CollageFormValues = {
  id?: number
  title?: string
  imageUrl?: string
  positionClass?: string
  orderIndex?: number
}

export function CollageForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: CollageFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-xl flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <ImageUploadField
        name="imageUrl"
        label="Photo"
        folder="collage"
        defaultValue={defaultValues?.imageUrl}
        required
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" defaultValue={defaultValues?.title} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="positionClass">Position (Tailwind classes)</Label>
        <Input
          id="positionClass"
          name="positionClass"
          defaultValue={defaultValues?.positionClass}
          placeholder="top-10 left-0 rotate-[-5deg]"
          required
        />
        <p className="text-xs text-muted-foreground">
          Controls where the photo sits in the draggable collage on the About page.
        </p>
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
