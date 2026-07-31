"use client"

import { motion } from "motion/react"

import { SectionHeading } from "@/components/section-heading"
import { StackItem } from "@/components/stack-item"
import { experiences } from "@/lib/data"

function CompanyLogo({ company }: { company: string }) {
  return (
    <div className="hidden size-16 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-lg font-semibold text-neutral-400 md:flex dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500">
      {company.charAt(0)}
    </div>
  )
}

export function Experiences() {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-10 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading>Worked at reputed firms</SectionHeading>
      <div className="flex flex-col gap-6 py-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex flex-col justify-between md:flex-row md:items-start">
              <div className="max-w-[80%]">
                <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {experience.company}
                </h2>
                <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
                  <p className="text-sm text-neutral-800 dark:text-neutral-200">
                    {experience.role}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {experience.duration}
                  </p>
                </div>
                <p className="text-sm text-neutral-500">{experience.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.stack.map((technology) => (
                    <StackItem key={technology} technology={technology} />
                  ))}
                </div>
              </div>
              <CompanyLogo company={experience.company} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
