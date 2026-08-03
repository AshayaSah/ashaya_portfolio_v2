"use client"

import * as React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function MarkdownField({
  name,
  label,
  defaultValue,
}: {
  name: string
  label: string
  defaultValue?: string
}) {
  const [value, setValue] = React.useState(defaultValue ?? "")
  const [showPreview, setShowPreview] = React.useState(false)
  const id = React.useId()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id}>{label}</Label>
        <button
          type="button"
          onClick={() => setShowPreview((prev) => !prev)}
          className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          {showPreview ? "Edit" : "Preview"}
        </button>
      </div>

      {/* Kept in the DOM regardless of preview state so the field always submits. */}
      <input type="hidden" name={name} value={value} />

      {showPreview ? (
        <div className="prose prose-neutral dark:prose-invert max-w-none rounded-md border border-border bg-background p-3">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{value || "*Nothing to preview*"}</ReactMarkdown>
        </div>
      ) : (
        <Textarea
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
          className={cn("min-h-64 font-mono text-sm")}
        />
      )}
    </div>
  )
}
