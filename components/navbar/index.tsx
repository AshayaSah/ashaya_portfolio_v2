"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
      </div>
    </Link>
  )
}

function NavShell({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <nav
      className={cn(
        "mx-auto flex max-w-4xl items-center justify-between px-3 py-2 backdrop-blur-sm transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </nav>
  )
}

function NavLink({
  href,
  active,
  className,
  onClick,
  children,
}: {
  href: string
  active: boolean
  className?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-2 py-1 text-sm transition-colors",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()
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

  const isActive = (href: string) => pathname === href

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block">
        <NavShell
          className={cn(
            "bg-background/50",
            scrolled
              ? "w-[85%] translate-y-2.5 rounded-[4rem] shadow-[var(--shadow-aceternity)]"
              : "w-[92%] rounded-none shadow-[var(--shadow-aceternity-clear)]"
          )}
        >
          <Logo />
          <div className="flex items-center">
            <ModeToggle />
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} active={isActive(item.href)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </NavShell>
      </div>

      <div className="fixed inset-x-0 top-0 z-50 mx-auto max-w-4xl md:hidden">
        <NavShell
          className={cn(
            "bg-background/80",
            scrolled ? "w-full rounded-none" : "w-[92%] rounded-full"
          )}
        >
          <Logo />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          >
            <Menu strokeWidth={1.5} className="h-6 w-6" />
          </button>
        </NavShell>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl"
            >
              <div className="flex w-full items-center justify-end p-4">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-foreground"
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
                    <NavLink
                      href={item.href}
                      active={isActive(item.href)}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-medium"
                    >
                      {item.label}
                    </NavLink>
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
