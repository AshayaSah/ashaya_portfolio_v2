"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

function Background({ alwaysVisible }: { alwaysVisible?: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full scale-[1.04] bg-muted transition-opacity duration-300",
        alwaysVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}
    >
      <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-border" />
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-border" />
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-border" />
      <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-border" />
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
        "group relative mt-4 w-fit max-w-lg text-sm font-normal text-foreground md:text-base",
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
