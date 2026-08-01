"use client"

import Image from "next/image"
import * as React from "react"
import { motion } from "motion/react"

import { SectionHeading } from "@/components/section-heading"
import { timeline, type TimelineItem } from "@/lib/data"
import { cn } from "@/lib/utils"

function CircleCheckFilled({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
    >
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
  )
}

function Step({ item, delay }: { item: TimelineItem; delay: number }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [visible, setVisible] = React.useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0
    const flip = event.clientX > viewportWidth - 220
    setPosition({
      x: event.clientX + (flip ? -220 : 24),
      y: event.clientY - 60,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      className="pl-4"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/step relative cursor-pointer"
      >
        <div
          className={cn(
            "flex items-start gap-2 rounded-lg transition-colors",
            item.highlight && "bg-muted px-3 py-3"
          )}
        >
          <CircleCheckFilled
            className={cn(
              "mt-1 h-4 w-4",
              item.highlight
                ? "text-amber-500 dark:text-amber-400"
                : "text-muted-foreground"
            )}
          />
          <h3
            className={cn(
              item.highlight
                ? "font-semibold text-foreground"
                : "text-muted-foreground group-hover/step:text-foreground"
            )}
          >
            {item.title}
          </h3>
        </div>
        <p className="pt-1 pl-6 text-sm text-muted-foreground">
          {item.description}
        </p>
        {item.image && (
          <motion.div
            className="pointer-events-none fixed z-50"
            style={{ left: position.x, top: position.y }}
            initial={false}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.7 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={220}
              height={140}
              className="h-28 w-44 rounded-xl border border-border object-cover shadow-xl"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export function Timeline() {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-6 border-y border-border px-4 py-6">
      <SectionHeading highlighted className="mt-4 mb-10">
        Timeline of Achievements
      </SectionHeading>
      {timeline.map((group, groupIndex) => (
        <div key={group.year} className="mb-4">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-foreground shadow-[var(--shadow-aceternity)]"
          >
            {group.year}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {group.items.map((item, itemIndex) => (
              <Step
                key={item.title}
                item={item}
                delay={groupIndex * 0.05 + itemIndex * 0.08}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
