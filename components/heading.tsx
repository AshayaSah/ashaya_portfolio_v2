"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <h1
        className={cn(
          "px-4 text-2xl font-bold tracking-tighter text-neutral-900 drop-shadow-lg md:text-4xl dark:text-neutral-100",
          className
        )}
      >
        {children}
      </h1>
    </motion.div>
  )
}
