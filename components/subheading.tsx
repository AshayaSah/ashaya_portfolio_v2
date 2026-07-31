"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export function Subheading({
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
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2
        className={cn(
          "max-w-lg px-4 pt-4 text-sm text-neutral-500 md:text-base dark:text-neutral-400",
          className
        )}
      >
        {children}
      </h2>
    </motion.div>
  )
}
