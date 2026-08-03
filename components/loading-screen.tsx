"use client"

import { motion } from "motion/react"

export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          className="h-10 w-10 rounded-full border-2 border-border border-t-foreground shadow-[var(--shadow-aceternity)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  )
}
