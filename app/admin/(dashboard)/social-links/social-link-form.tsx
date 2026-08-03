import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type SocialLinkFormValues = {
  id?: number
  label?: string
  href?: string
  icon?: string
  orderIndex?: number
}

export function SocialLinkForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => Promise<void>
  defaultValues?: SocialLinkFormValues
}) {
  return (
    <form action={action} className="mt-6 flex max-w-md flex-col gap-5">
      {defaultValues?.id !== undefined && (
        <input type="hidden" name="id" value={defaultValues.id} />
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="label">Label</Label>
        <Input id="label" name="label" defaultValue={defaultValues?.label} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="href">URL</Label>
        <Input id="href" name="href" defaultValue={defaultValues?.href} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="icon">Icon</Label>
        <select
          id="icon"
          name="icon"
          defaultValue={defaultValues?.icon ?? "x"}
          className="flex h-9 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground dark:border-input dark:bg-input/30"
        >
          <option value="x">X (Twitter)</option>
          <option value="linkedin">LinkedIn</option>
          <option value="github">GitHub</option>
        </select>
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
