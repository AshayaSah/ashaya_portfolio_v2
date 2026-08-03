import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type ExperienceFormValues = {
  id?: number
  company?: string
  role?: string
  duration?: string
  description?: string
  logoUrl?: string | null
  invertDark?: boolean
  stack?: string[]
  orderIndex?: number
}

export function ExperienceForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: ExperienceFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-xl flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <ImageUploadField
        name="logoUrl"
        label="Company logo (optional)"
        folder="experiences"
        defaultValue={defaultValues?.logoUrl ?? undefined}
      />

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" defaultValue={defaultValues?.company} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="role">Role</Label>
        <Input id="role" name="role" defaultValue={defaultValues?.role} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="duration">Duration</Label>
        <Input
          id="duration"
          name="duration"
          defaultValue={defaultValues?.duration}
          placeholder="June 2020 - Present"
          required
        />
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
        <Label htmlFor="stack">Tech stack (comma-separated)</Label>
        <Input
          id="stack"
          name="stack"
          defaultValue={defaultValues?.stack?.join(", ")}
          placeholder="React, TypeScript, GraphQL"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-foreground">
        <input
          type="checkbox"
          name="invertDark"
          defaultChecked={defaultValues?.invertDark}
          className="size-4 rounded border-border"
        />
        Invert logo color in dark mode
      </label>

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
