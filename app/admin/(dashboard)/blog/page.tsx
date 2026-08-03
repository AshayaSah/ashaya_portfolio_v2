import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/db/queries"

import { deleteBlogPost } from "./actions"

export default async function AdminBlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Blog</h1>
        <Button asChild size="sm">
          <Link href="/admin/blog/new">Add post</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between gap-4 rounded-md border border-border bg-card p-3"
          >
            <div>
              <p className="font-medium text-foreground">{post.title}</p>
              <p className="text-sm text-muted-foreground">
                /{post.slug} &middot; {post.date}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/blog/${post.id}/edit`}>Edit</Link>
              </Button>
              <DeleteButton action={deleteBlogPost.bind(null, post.id)} />
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-muted-foreground">No posts yet.</p>
        )}
      </div>
    </div>
  )
}
