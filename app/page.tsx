import { Container } from "@/components/container"
import { CTA } from "@/components/cta"
import { Experiences } from "@/components/experiences"
import { Flipper } from "@/components/flipper"
import { Heading } from "@/components/heading"
import { LandingBlogs } from "@/components/landing-blogs"
import { Projects } from "@/components/projects"
import { Subheading } from "@/components/subheading"
import { Testimonials } from "@/components/testimonials"
import {
  getBlogPosts,
  getExperiences,
  getProfile,
  getProjects,
  getTestimonials,
} from "@/db/queries"

export default async function Home() {
  const [profile, projects, blogPosts, experiences, testimonials] = await Promise.all([
    getProfile(),
    getProjects(),
    getBlogPosts(),
    getExperiences(),
    getTestimonials(),
  ])

  return (
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <Heading>{profile.fullName}</Heading>
        <Flipper roles={profile.roles} />
      </div>
      <Subheading>{profile.homeSubheading}</Subheading>
      <Projects projects={projects} />
      <LandingBlogs posts={blogPosts.slice(0, 4)} />
      <Experiences experiences={experiences} />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </Container>
  )
}
