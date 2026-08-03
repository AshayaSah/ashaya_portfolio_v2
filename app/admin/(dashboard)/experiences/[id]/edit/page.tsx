import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { experiences } from "@/db/schema"

import { updateExperience } from "../../actions"
import { ExperienceForm } from "../../experience-form"

export default async function EditExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [experience] = await db
    .select()
    .from(experiences)
    .where(eq(experiences.id, Number(id)))
    .limit(1)

  if (!experience) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit experience</h1>
      <ExperienceForm action={updateExperience} defaultValues={experience} />
    </div>
  )
}
