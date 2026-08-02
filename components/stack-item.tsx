"use client"

import { motion } from "motion/react"

import { TechIcon } from "@/lib/logo-mapper"

export function StackItem({ technology }: { technology: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      tabIndex={0}
      className="-mr-3 flex items-start justify-start rounded-full border border-border bg-muted p-1 text-xs text-muted-foreground hover:z-10 focus-visible:z-10"
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
        className="overflow-hidden whitespace-nowrap text-foreground"
      >
        &nbsp;{technology}
      </motion.span>
    </motion.div>
  )
}
