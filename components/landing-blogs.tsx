"use client"

import { BlogList } from "@/components/blog-list"
import { SectionHeading } from "@/components/section-heading"

export function LandingBlogs() {
  return (
    <div className="px-4 py-6">
      <SectionHeading className="mb-4">Sharing knowledge as I learn</SectionHeading>
      <BlogList />
    </div>
  )
}
