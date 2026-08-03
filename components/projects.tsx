"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { InferSelectModel } from "drizzle-orm"
import { motion } from "motion/react"

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
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-border px-4 py-6">
      <SectionHeading highlighted={highlighted}>I love building things</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative mb-4 flex h-full flex-col rounded-2xl shadow-[var(--shadow-card-clear)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
          >
            <Link href={project.href} className="flex h-full flex-col">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                <div>
                  <h2 className="z-20 mt-2 font-medium tracking-tight text-foreground">
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-[14rem] text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                  <div className="flex max-w-[14rem] flex-wrap gap-1">
                    {project.stack.map((technology) => (
                      <StackItem key={technology} technology={technology} />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
