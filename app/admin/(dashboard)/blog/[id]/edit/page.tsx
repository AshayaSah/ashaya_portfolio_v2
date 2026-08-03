import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { blogPosts } from "@/db/schema"

import { updateBlogPost } from "../../actions"
import { BlogForm } from "../../blog-form"

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [post] = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.id, Number(id)))
    .limit(1)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit post</h1>
      <BlogForm action={updateBlogPost} defaultValues={post} />
    </div>
  )
}
