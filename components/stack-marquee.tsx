"use client"

import Marquee from "react-fast-marquee"

import { TechIcon } from "@/lib/logo-mapper"

export function StackMarquee({ technologies }: { technologies: string[] }) {
  return (
    <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] py-2">
      <Marquee
        autoFill
        pauseOnHover
        speed={30}
        gradient={false}
        className="flex items-center"
      >
        {technologies.map((technology) => (
          <div
            key={technology}
            className="mx-3 flex shrink-0 items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm font-bold text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            <TechIcon technology={technology} />
            <span>{technology}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
