import { createTimelineItem } from "../actions"
import { TimelineForm } from "../timeline-form"

export default function NewTimelineItemPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add achievement</h1>
      <TimelineForm action={createTimelineItem} />
    </div>
  )
}
