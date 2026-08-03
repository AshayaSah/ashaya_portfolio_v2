import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { cloudinary } from "@/lib/cloudinary"
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/session"

const ALLOWED_FOLDERS = new Set([
  "profile",
  "projects",
  "experiences",
  "testimonials",
  "timeline",
  "collage",
  "blog",
])

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const isValid = await verifySessionToken(cookieStore.get(SESSION_COOKIE_NAME)?.value)
  if (!isValid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get("file")
  const folderInput = String(formData.get("folder") ?? "")
  const folder = ALLOWED_FOLDERS.has(folderInput) ? folderInput : "misc"

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image files are supported" }, { status: 400 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const base64 = Buffer.from(arrayBuffer).toString("base64")
  const dataUri = `data:${file.type};base64,${base64}`

  try {
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: `portfolio/${folder}`,
    })
    return NextResponse.json({ url: result.secure_url, publicId: result.public_id })
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 502 })
  }
}
