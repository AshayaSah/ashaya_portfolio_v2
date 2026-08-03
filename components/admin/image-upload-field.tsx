"use client"

import Image from "next/image"
import * as React from "react"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type ImageUploadFieldProps = {
  name: string
  label: string
  folder: string
  defaultValue?: string
  required?: boolean
}

export function ImageUploadField({
  name,
  label,
  folder,
  defaultValue,
  required,
}: ImageUploadFieldProps) {
  const [url, setUrl] = React.useState(defaultValue ?? "")
  const [uploading, setUploading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const inputId = React.useId()

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.set("file", file)
      formData.set("folder", folder)

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = (await response.json()) as { url: string }
      setUrl(data.url)
    } catch {
      setError("Upload failed. Try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={inputId}>{label}</Label>
      <input type="hidden" name={name} value={url} required={required} />
      <div className="flex items-center gap-4">
        {url && (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
            <Image src={url} alt="" fill className="object-cover" sizes="64px" unoptimized />
          </div>
        )}
        <input
          id={inputId}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={cn(
            "flex-1 rounded-md border border-border bg-background text-sm text-foreground file:mr-3 file:rounded file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm file:text-foreground dark:border-input dark:bg-input/30"
          )}
        />
      </div>
      {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
