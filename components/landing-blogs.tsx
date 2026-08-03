"use client"

import type { InferSelectModel } from "drizzle-orm"

import { BlogList } from "@/components/blog-list"
import { SectionHeading } from "@/components/section-heading"
import type { blogPosts } from "@/db/schema"

type BlogPost = InferSelectModel<typeof blogPosts>

export function LandingBlogs({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="px-4 py-6">
      <SectionHeading className="mb-4">Sharing knowledge as I learn</SectionHeading>
      <BlogList posts={posts} />
    </div>
  )
}
