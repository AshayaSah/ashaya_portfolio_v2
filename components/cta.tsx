"use client"

import * as React from "react"

import { SectionHeading } from "@/components/section-heading"
import { Input } from "@/components/ui/input"

export function CTA() {
  const [email, setEmail] = React.useState("")

  const mailtoHref = email
    ? `mailto:tyler@durden.com?body=${encodeURIComponent(`Reach me back at: ${email}`)}`
    : "mailto:tyler@durden.com"

  return (
    <div className="my-4 px-4 py-6">
      <SectionHeading>Get in touch</SectionHeading>
      <p className="max-w-lg pt-4 text-sm text-muted-foreground md:text-base">
        I&apos;m currently looking for new opportunities. Whether you have a question or want to
        say hi, hit that button.
      </p>
      <div className="relative mt-4 max-w-lg">
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email"
          className="h-auto rounded-lg py-3 pr-[120px]"
        />
        <a
          href={mailtoHref}
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md border border-border bg-muted px-4 py-1.5 text-sm text-foreground shadow-[0px_4px_8px_0px_var(--color-border)_inset] transition-colors hover:bg-accent"
        >
          Send Enquiry
        </a>
      </div>
    </div>
  )
}
