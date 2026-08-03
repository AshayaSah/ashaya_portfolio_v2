import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Projects } from "@/components/projects"
import { Subheading } from "@/components/subheading"
import { getProfile, getProjects } from "@/db/queries"

export default async function ProjectsPage() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()])

  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">{profile.projectsHeading}</Heading>
        <Subheading>{profile.projectsSubheading}</Subheading>
      </div>
      <Projects projects={projects} highlighted />
    </Container>
  )
}
