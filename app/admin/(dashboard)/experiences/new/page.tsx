import { createExperience } from "../actions"
import { ExperienceForm } from "../experience-form"

export default function NewExperiencePage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add experience</h1>
      <ExperienceForm action={createExperience} />
    </div>
  )
}
