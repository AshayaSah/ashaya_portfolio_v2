import { BlogList } from "@/components/blog-list"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"

export default function Blog() {
  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">Blog</Heading>
        <Subheading>
          Sharing knowledge as I learn. Notes on web development, design, and the craft of
          building for the web.
        </Subheading>
      </div>
      <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
        <BlogList />
      </div>
    </Container>
  )
}
