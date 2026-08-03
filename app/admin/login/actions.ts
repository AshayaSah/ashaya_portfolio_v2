"use server"

import { timingSafeEqual } from "node:crypto"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { createSessionToken, sessionCookieOptions, SESSION_COOKIE_NAME } from "@/lib/session"

export type LoginState = { error?: string } | undefined

function passwordsMatch(input: string, expected: string) {
  const inputBuffer = Buffer.from(input)
  const expectedBuffer = Buffer.from(expected)
  if (inputBuffer.length !== expectedBuffer.length) return false
  return timingSafeEqual(inputBuffer, expectedBuffer)
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "")
  const expected = process.env.ADMIN_PASSWORD

  if (!expected || !passwordsMatch(password, expected)) {
    return { error: "Incorrect password." }
  }

  const token = await createSessionToken()
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, sessionCookieOptions)

  redirect("/admin")
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
  redirect("/admin/login")
}
