import { createProject } from "../actions"
import { ProjectForm } from "../project-form"

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add project</h1>
      <ProjectForm action={createProject} />
    </div>
  )
}
