"use client"

import Link from "next/link"
import { motion } from "motion/react"

import { SectionHeading } from "@/components/section-heading"
import { blogs } from "@/lib/data"

export function LandingBlogs() {
  return (
    <div className="px-4 py-6">
      <SectionHeading className="mb-4">Sharing knowledge as I learn</SectionHeading>
      <div className="flex flex-col gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <h2 className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {blog.title}
                </h2>
                <p className="text-sm text-neutral-500 md:text-sm dark:text-neutral-400">
                  {blog.date}
                </p>
              </div>
              <p className="max-w-lg pt-2 text-sm text-neutral-500 md:text-sm dark:text-neutral-400">
                {blog.excerpt}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
