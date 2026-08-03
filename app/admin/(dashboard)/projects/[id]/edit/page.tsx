import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { projects } from "@/db/schema"

import { updateProject } from "../../actions"
import { ProjectForm } from "../../project-form"

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, Number(id)))
    .limit(1)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit project</h1>
      <ProjectForm action={updateProject} defaultValues={project} />
    </div>
  )
}
