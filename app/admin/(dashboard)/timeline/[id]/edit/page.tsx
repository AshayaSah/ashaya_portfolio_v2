import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { timelineItems } from "@/db/schema"

import { updateTimelineItem } from "../../actions"
import { TimelineForm } from "../../timeline-form"

export default async function EditTimelineItemPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [item] = await db
    .select()
    .from(timelineItems)
    .where(eq(timelineItems.id, Number(id)))
    .limit(1)

  if (!item) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit achievement</h1>
      <TimelineForm action={updateTimelineItem} defaultValues={item} />
    </div>
  )
}
