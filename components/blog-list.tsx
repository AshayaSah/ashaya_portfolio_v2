"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { blogs } from "@/lib/data"

export function BlogList() {
  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative flex h-full flex-col rounded-2xl shadow-[var(--shadow-card-clear)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
        >
          <Link href={`/blog/${blog.slug}`} className="flex h-full flex-col">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{blog.date}</p>
                <h2 className="mt-2 font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                  {blog.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {blog.excerpt}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
