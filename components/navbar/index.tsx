"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

function Logo() {
  return (
    <Link href="/">
      <div className="relative overflow-hidden rounded-full">
        <Image
          src="/profile_pic.jpg"
          alt="Avatar"
          width={100}
          height={100}
          className="h-10 w-10 rounded-full"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent blur-sm" />
      </div>
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block">
        <nav
          className={cn(
            "mx-auto flex max-w-4xl items-center justify-between bg-white/50 px-3 py-2 backdrop-blur-sm transition-all duration-300 ease-in-out dark:bg-neutral-900/50",
            scrolled
              ? "w-[85%] translate-y-2.5 rounded-[4rem] shadow-[var(--shadow-aceternity)]"
              : "w-[92%] rounded-none shadow-[var(--shadow-aceternity-clear)]"
          )}
        >
          <Logo />
          <div className="flex items-center">
            <ModeToggle />
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="relative px-2 py-1 text-sm">
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="fixed inset-x-0 top-0 z-50 mx-auto max-w-4xl md:hidden">
        <nav className="mx-auto flex w-[92%] max-w-4xl items-center justify-between rounded-full bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50">
          <Logo />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
          >
            <Menu strokeWidth={1.5} className="h-6 w-6" />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-xl dark:bg-neutral-900/95"
            >
              <div className="flex w-full items-center justify-end p-4">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
                >
                  <X strokeWidth={1.5} className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: navItems.length * 0.08 }}
                >
                  <ModeToggle />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
