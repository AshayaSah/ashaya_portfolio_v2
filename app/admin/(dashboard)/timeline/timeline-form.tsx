import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type TimelineFormValues = {
  id?: number
  year?: string
  title?: string
  description?: string
  imageUrl?: string | null
  highlight?: boolean
  orderIndex?: number
}

export function TimelineForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: TimelineFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-xl flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <ImageUploadField
        name="imageUrl"
        label="Achievement image (optional, shown on hover)"
        folder="timeline"
        defaultValue={defaultValues?.imageUrl ?? undefined}
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="year">Year</Label>
        <Input id="year" name="year" defaultValue={defaultValues?.year} placeholder="2025" required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" defaultValue={defaultValues?.title} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={defaultValues?.description}
          required
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-foreground">
        <input
          type="checkbox"
          name="highlight"
          defaultChecked={defaultValues?.highlight}
          className="size-4 rounded border-border"
        />
        Highlight this achievement
      </label>

      <div className="flex flex-col gap-2">
        <Label htmlFor="orderIndex">Order (within year)</Label>
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
