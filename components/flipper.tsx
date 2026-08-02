"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"

const ROLES = ["Design Engineer", "Frontend Developer", "UI Craftsman", "Problem Solver"]

export function Flipper() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative order-first mx-4 mb-2 flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 pt-0 text-sm text-muted-foreground shadow-[var(--shadow-aceternity)] sm:order-last sm:mx-0 sm:mb-0"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block whitespace-nowrap"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
}
