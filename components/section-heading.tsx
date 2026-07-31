"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

function Background({ alwaysVisible }: { alwaysVisible?: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 transition-opacity duration-300 dark:bg-neutral-800",
        alwaysVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}
    >
      <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
      <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
    </div>
  )
}

export function SectionHeading({
  children,
  className,
  highlighted = false,
}: {
  children: string
  className?: string
  highlighted?: boolean
}) {
  const words = children.split(" ")

  return (
    <h2
      className={cn(
        "group relative mt-4 w-fit max-w-lg text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-300",
        className
      )}
    >
      <Background alwaysVisible={highlighted} />
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  )
}
