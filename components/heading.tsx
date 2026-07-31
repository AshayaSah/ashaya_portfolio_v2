"use client"

import { motion } from "motion/react"

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="px-4 text-2xl font-bold tracking-tighter text-neutral-900 drop-shadow-lg md:text-4xl dark:text-neutral-100">
        {children}
      </h1>
    </motion.div>
  )
}
