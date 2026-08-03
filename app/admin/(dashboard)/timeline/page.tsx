import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getTimelineGroupedByYear } from "@/db/queries"

import { deleteTimelineItem } from "./actions"

export default async function AdminTimelinePage() {
  const groups = await getTimelineGroupedByYear()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Timeline</h1>
        <Button asChild size="sm">
          <Link href="/admin/timeline/new">Add achievement</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.year}>
            <h2 className="mb-2 font-semibold text-foreground">{group.year}</h2>
            <div className="flex flex-col gap-2">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-3"
                >
                  <div>
                    <p className="font-medium text-foreground">
                      {item.title} {item.highlight && "★"}
                    </p>
                    <p className="line-clamp-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/timeline/${item.id}/edit`}>Edit</Link>
                    </Button>
                    <DeleteButton action={deleteTimelineItem.bind(null, item.id)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {groups.length === 0 && (
          <p className="text-sm text-muted-foreground">No timeline items yet.</p>
        )}
      </div>
    </div>
  )
}
