"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { SectionHeading } from "@/components/section-heading"
import { StackItem } from "@/components/stack-item"
import { projects } from "@/lib/data"

export function Projects({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading highlighted={highlighted}>I love building things</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative mb-4 flex h-full flex-col rounded-2xl shadow-[var(--shadow-card-clear)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
          >
            <Link href={project.href} className="flex h-full flex-col">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                <div>
                  <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                  <div className="flex max-w-[14rem] flex-wrap gap-1">
                    {project.stack.map((technology) => (
                      <StackItem key={technology} technology={technology} />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-500 transition-colors group-hover:border-neutral-300 group-hover:bg-neutral-50 group-hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:border-neutral-600 dark:group-hover:bg-neutral-700 dark:group-hover:text-neutral-100">
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
