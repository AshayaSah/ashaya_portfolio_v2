import Link from "next/link"

import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/brand"

const socials = [
  { href: "#", label: "X (Twitter)", icon: XIcon },
  { href: "#", label: "LinkedIn", icon: LinkedinIcon },
  { href: "#", label: "GitHub", icon: GithubIcon },
]

export function Footer() {
  return (
    <footer className="relative mx-auto h-full w-full max-w-4xl bg-background">
      <div className="flex justify-between border-t border-border px-4 py-3 md:px-8">
        <p className="text-xs text-muted-foreground">
          Mr. Ashaya Sah - Fullstack Software Engineer
        </p>
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link key={label} href={href} aria-label={label}>
              <Icon className="size-4 text-muted-foreground hover:text-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
