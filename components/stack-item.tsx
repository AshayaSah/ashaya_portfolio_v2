"use client"

import { motion } from "motion/react"

import { TechIcon } from "@/lib/logo-mapper"

export function StackItem({ technology }: { technology: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      tabIndex={0}
      className="-mr-3 flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 hover:z-10 focus-visible:z-10 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <span>
        <TechIcon technology={technology} />
      </span>
      <motion.span
        variants={{
          initial: { width: 0 },
          hover: { width: "auto" },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        &nbsp;{technology}
      </motion.span>
    </motion.div>
  )
}
