"use client"

import { Button } from "@/components/ui/button"

export function DeleteButton({
  action,
  confirmMessage = "Delete this item? This cannot be undone.",
}: {
  action: () => Promise<void>
  confirmMessage?: string
}) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!confirm(confirmMessage)) {
          event.preventDefault()
        }
      }}
    >
      <Button type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    </form>
  )
}
