import Link from "next/link"

import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/brand"
import { getProfile, getSocialLinks } from "@/db/queries"

const ICONS = {
  x: XIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

export async function Footer() {
  const [profile, socialLinks] = await Promise.all([getProfile(), getSocialLinks()])

  return (
    <footer className="relative mx-auto h-full w-full max-w-4xl bg-background">
      <div className="flex justify-between border-t border-border px-4 py-3 md:px-8">
        <p className="text-xs text-muted-foreground">{profile.footerTagline}</p>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ id, href, label, icon }) => {
            const Icon = ICONS[icon]
            return (
              <Link key={id} href={href} aria-label={label}>
                <Icon className="size-4 text-muted-foreground hover:text-foreground" />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
