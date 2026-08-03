import { createBlogPost } from "../actions"
import { BlogForm } from "../blog-form"

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add post</h1>
      <BlogForm action={createBlogPost} />
    </div>
  )
}
