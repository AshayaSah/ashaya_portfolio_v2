"use client"

import * as React from "react"

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
      className="shadow-section-inset dark:shadow-section-inset-dark mx-auto my-6 border-y border-neutral-100 px-4 py-12 dark:border-neutral-800"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        {sent && (
          <p className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </p>
        )}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Tyler Durden"
            required
            className="focus:ring-primary rounded-md bg-white px-2 py-2 text-sm text-neutral-700 shadow-[var(--shadow-aceternity)] focus:ring-2 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tyler@projectmayhem.com"
            required
            className="focus:ring-primary rounded-md bg-white px-2 py-2 text-sm text-neutral-700 shadow-[var(--shadow-aceternity)] focus:ring-2 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="You're crazy good, never change."
            required
            className="focus:ring-primary resize-none rounded-md bg-white px-2 py-1 text-sm text-neutral-700 shadow-[var(--shadow-aceternity)] focus:ring-2 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200"
          />
        </div>
        <button
          type="submit"
          className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
        >
          Send message
        </button>
      </div>
    </form>
  )
}
