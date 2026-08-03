import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { MarkdownField } from "./markdown-field"

type BlogFormValues = {
  id?: number
  title?: string
  slug?: string
  date?: string
  excerpt?: string
  imageUrl?: string
  contentMarkdown?: string
}

export function BlogForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: BlogFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-2xl flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <ImageUploadField
        name="imageUrl"
        label="Cover image"
        folder="blog"
        defaultValue={defaultValues?.imageUrl}
        required
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" defaultValue={defaultValues?.title} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          defaultValue={defaultValues?.slug}
          placeholder="auto-generated from title if left blank"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="date">Date (display text)</Label>
        <Input
          id="date"
          name="date"
          defaultValue={defaultValues?.date}
          placeholder="Thursday, Feb 15, 2024"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" name="excerpt" defaultValue={defaultValues?.excerpt} required />
      </div>

      <MarkdownField
        name="contentMarkdown"
        label="Content (Markdown)"
        defaultValue={defaultValues?.contentMarkdown}
      />

      <Button type="submit" className="w-fit">
        Save
      </Button>
    </form>
  )
}
