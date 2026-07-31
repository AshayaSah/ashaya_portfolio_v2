import { Collage } from "@/components/collage"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"
import { Timeline } from "@/components/timeline"

export default function About() {
  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">About Me</Heading>
        <Subheading>
          I&apos;m a passionate software engineer dedicated to crafting elegant solutions for
          complex problems. With expertise in full-stack development, I enjoy building
          user-centric applications that make a difference.
        </Subheading>
      </div>
      <Collage />
      <Timeline />
    </Container>
  )
}
