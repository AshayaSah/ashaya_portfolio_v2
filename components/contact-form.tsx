"use client"

import * as React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" })
  const [sent, setSent] = React.useState(false)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    setSent(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset dark:shadow-section-inset-dark mx-auto my-6 border-y border-border px-4 py-12"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        {sent && (
          <p className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </p>
        )}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-muted-foreground"
          >
            Full name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Tyler Durden"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-muted-foreground"
          >
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tyler@projectmayhem.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-muted-foreground"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="You're crazy good, never change."
            required
            className="resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-fit rounded-md border border-border bg-muted px-4 py-1.5 text-sm text-foreground shadow-[0px_4px_8px_0px_var(--color-border)_inset] transition-colors hover:bg-accent"
        >
          Send message
        </button>
      </div>
    </form>
  )
}
