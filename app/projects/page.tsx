import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Projects } from "@/components/projects"
import { Subheading } from "@/components/subheading"

export default function ProjectsPage() {
  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">Projects</Heading>
        <Subheading>
          I&apos;m a passionate software engineer dedicated to crafting elegant solutions for
          complex problems. With expertise in full-stack development, I enjoy building
          user-centric applications that make a difference.
        </Subheading>
      </div>
      <Projects highlighted />
    </Container>
  )
}
