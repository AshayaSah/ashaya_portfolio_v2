import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getExperiences } from "@/db/queries"

import { deleteExperience } from "./actions"

export default async function AdminExperiencesPage() {
  const experiences = await getExperiences()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Experiences</h1>
        <Button asChild size="sm">
          <Link href="/admin/experiences/new">Add experience</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-3"
          >
            <div>
              <p className="font-medium text-foreground">
                {experience.company} &middot; {experience.role}
              </p>
              <p className="text-sm text-muted-foreground">{experience.duration}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/experiences/${experience.id}/edit`}>Edit</Link>
              </Button>
              <DeleteButton action={deleteExperience.bind(null, experience.id)} />
            </div>
          </div>
        ))}
        {experiences.length === 0 && (
          <p className="text-sm text-muted-foreground">No experiences yet.</p>
        )}
      </div>
    </div>
  )
}
