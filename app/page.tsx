import { Container } from "@/components/container"
import { CTA } from "@/components/cta"
import { Experiences } from "@/components/experiences"
import { Flipper } from "@/components/flipper"
import { Heading } from "@/components/heading"
import { LandingBlogs } from "@/components/landing-blogs"
import { Projects } from "@/components/projects"
import { Subheading } from "@/components/subheading"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <Heading>John MacTavish</Heading>
        <Flipper />
      </div>
      <Subheading>
        They call me Soap. What the hell kind of a name is Soap? I&apos;m a software engineer
        though with an eye for design.
      </Subheading>
      <Projects />
      <LandingBlogs />
      <Experiences />
      <Testimonials />
      <CTA />
    </Container>
  )
}
