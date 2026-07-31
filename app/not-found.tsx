"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { Container } from "@/components/container"

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <div className="flex gap-2" aria-hidden>
          {["4", "0", "4"].map((digit, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-7xl font-bold tracking-tighter text-neutral-900 md:text-9xl dark:text-neutral-100"
            >
              {digit}
            </motion.span>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold tracking-tighter text-neutral-900 md:text-4xl dark:text-neutral-100"
        >
          This page has left the building.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-lg text-sm text-neutral-500 md:text-base dark:text-neutral-400"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s
          get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-6 py-3 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            See my projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Container>
  )
}
