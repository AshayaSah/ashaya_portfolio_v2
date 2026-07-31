import Link from "next/link"

import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/brand"

const socials = [
  { href: "#", label: "X (Twitter)", icon: XIcon },
  { href: "#", label: "LinkedIn", icon: LinkedinIcon },
  { href: "#", label: "GitHub", icon: GithubIcon },
]

export function Footer() {
  return (
    <footer className="relative mx-auto h-full w-full max-w-4xl bg-white dark:bg-neutral-900">
      <div className="flex justify-between border-t border-neutral-100 px-4 py-3 md:px-8 dark:border-neutral-800">
        <p className="text-xs text-neutral-500">
          Mr. Ashaya Sah - Fullstack Software Engineer
        </p>
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link key={label} href={href} aria-label={label}>
              <Icon className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
