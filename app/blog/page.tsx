import { BlogList } from "@/components/blog-list"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"
import { getBlogPosts, getProfile } from "@/db/queries"

export default async function Blog() {
  const [profile, blogPosts] = await Promise.all([getProfile(), getBlogPosts()])

  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">{profile.blogHeading}</Heading>
        <Subheading>{profile.blogSubheading}</Subheading>
      </div>
      <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-border px-4 py-6">
        <BlogList posts={blogPosts} />
      </div>
    </Container>
  )
}
