"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import type { InferSelectModel } from "drizzle-orm"
import { motion } from "motion/react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { SectionHeading } from "@/components/section-heading"
import { StackItem } from "@/components/stack-item"
import type { projects as projectsTable } from "@/db/schema"

type Project = InferSelectModel<typeof projectsTable>

export function Projects({
  projects,
  highlighted = false,
}: {
  projects: Project[]
  highlighted?: boolean
}) {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null)

  return (
    <div className="my-4 border-y border-border px-4 py-6 shadow-section-inset dark:shadow-section-inset-dark">
      <SectionHeading highlighted={highlighted}>
        I love building things
      </SectionHeading>
      <div className="relative grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {hoveredId !== null && (
          <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-background/40 backdrop-blur-sm transition-opacity duration-300" />
        )}
        {projects.map((project, index) => {
          const isHovered = hoveredId === project.id
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() =>
                setHoveredId((c) => (c === project.id ? null : c))
              }
              className={`group relative mb-4 flex h-full flex-col rounded-2xl transition-all duration-300 ${
                isHovered
                  ? "z-20 shadow-[var(--shadow-card)]"
                  : "shadow-[var(--shadow-card-clear)]"
              }`}
            >
              <div className="relative overflow-visible">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full origin-bottom rounded-xl object-cover transition-transform duration-300 ease-out group-hover:scale-[1.5]"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between bg-card py-4 transition-all duration-300 group-hover:px-4">
                <div>
                  <h2 className="z-20 mt-2 font-medium tracking-tight text-foreground">
                    {project.title}
                  </h2>
                  <div className="prose mt-2 max-w-[14rem] text-sm prose-neutral dark:prose-invert prose-p:text-sm prose-p:text-muted-foreground prose-strong:text-foreground">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {project.description}
                    </ReactMarkdown>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                  <div className="flex max-w-[14rem] flex-wrap gap-1">
                    {project.stack.map((technology) => (
                      <StackItem key={technology} technology={technology} />
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
