import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type ProjectFormValues = {
  id?: number
  title?: string
  description?: string
  imageUrl?: string
  href?: string
  stack?: string[]
  orderIndex?: number
}

export function ProjectForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: ProjectFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-xl flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <ImageUploadField
        name="imageUrl"
        label="Cover image"
        folder="projects"
        defaultValue={defaultValues?.imageUrl}
        required
      />

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

      <div className="flex flex-col gap-2">
        <Label htmlFor="href">Link</Label>
        <Input id="href" name="href" defaultValue={defaultValues?.href} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="stack">Tech stack (comma-separated)</Label>
        <Input
          id="stack"
          name="stack"
          defaultValue={defaultValues?.stack?.join(", ")}
          placeholder="React, Next.js, Tailwind CSS"
        />
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
