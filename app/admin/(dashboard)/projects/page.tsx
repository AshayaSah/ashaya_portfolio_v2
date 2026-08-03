import Image from "next/image"
import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getProjects } from "@/db/queries"

import { deleteProject } from "./actions"

export default async function AdminProjectsPage() {
  const projects = await getProjects()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Projects</h1>
        <Button asChild size="sm">
          <Link href="/admin/projects/new">Add project</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={project.imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{project.title}</p>
                <p className="line-clamp-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/projects/${project.id}/edit`}>Edit</Link>
              </Button>
              <DeleteButton action={deleteProject.bind(null, project.id)} />
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-muted-foreground">No projects yet.</p>
        )}
      </div>
    </div>
  )
}
