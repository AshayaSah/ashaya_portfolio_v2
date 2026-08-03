"use client"

import Image from "next/image"
import type { InferSelectModel } from "drizzle-orm"
import { motion } from "motion/react"

import { SectionHeading } from "@/components/section-heading"
import { StackItem } from "@/components/stack-item"
import type { experiences as experiencesTable } from "@/db/schema"
import { cn } from "@/lib/utils"

type Experience = InferSelectModel<typeof experiencesTable>

function CompanyLogo({ company, logoUrl, invertDark }: Pick<Experience, "company" | "logoUrl" | "invertDark">) {
  return (
    <div className="hidden size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted text-lg font-semibold text-muted-foreground md:flex">
      {logoUrl ? (
        <Image
          src={logoUrl}
          alt={company}
          width={64}
          height={64}
          className={cn("size-full object-contain p-2", invertDark && "dark:invert")}
        />
      ) : (
        company.charAt(0)
      )}
    </div>
  )
}

export function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-10 border-y border-border px-4 py-6">
      <SectionHeading>Worked at reputed firms</SectionHeading>
      <div className="flex flex-col gap-6 py-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex flex-col justify-between md:flex-row md:items-start">
              <div className="max-w-[80%]">
                <h2 className="font-medium text-foreground">
                  {experience.company}
                </h2>
                <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
                  <p className="text-sm text-foreground">
                    {experience.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {experience.duration}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.stack.map((technology) => (
                    <StackItem key={technology} technology={technology} />
                  ))}
                </div>
              </div>
              <CompanyLogo
                company={experience.company}
                logoUrl={experience.logoUrl}
                invertDark={experience.invertDark}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
