import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/container"
import { blogs } from "@/lib/data"

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find((entry) => entry.slug === slug)

  return {
    title: blog ? `${blog.title} | Mr. Ashaya Sah` : "Blog | Mr. Ashaya Sah",
    description: blog?.excerpt,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = blogs.find((entry) => entry.slug === slug)

  if (!blog) {
    notFound()
  }

  return (
    <Container>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 px-4 pt-4 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <ArrowLeft className="h-4 w-4" />
        All posts
      </Link>
      <div className="flex flex-col pt-8">
        <p className="px-4 text-sm text-neutral-500 dark:text-neutral-400">{blog.date}</p>
        <h1 className="px-4 pt-2 text-2xl font-bold tracking-tighter text-neutral-900 md:text-4xl dark:text-neutral-100">
          {blog.title}
        </h1>
        <p className="max-w-lg px-4 pt-4 text-sm text-neutral-500 md:text-base dark:text-neutral-400">
          {blog.excerpt}
        </p>
      </div>
      <article className="shadow-section-inset dark:shadow-section-inset-dark mx-auto my-6 w-full border-y border-neutral-100 px-4 py-12 dark:border-neutral-800">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={800}
              className="aspect-[3/2] w-full rounded-xl object-cover"
            />
          </div>
          {blog.content.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold tracking-tight text-neutral-900 md:text-xl dark:text-neutral-100">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="pt-3 text-sm leading-7 text-neutral-600 md:text-base dark:text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </Container>
  )
}
