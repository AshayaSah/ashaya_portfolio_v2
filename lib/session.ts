import { jwtVerify, SignJWT } from "jose"

export const SESSION_COOKIE_NAME = "admin_session"
const SESSION_DURATION = "7d"
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7

function getSecretKey() {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    throw new Error("SESSION_SECRET is not set")
  }
  return new TextEncoder().encode(secret)
}

export async function createSessionToken() {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(SESSION_DURATION)
    .sign(getSecretKey())
}

export async function verifySessionToken(token: string | undefined) {
  if (!token) return false

  try {
    const { payload } = await jwtVerify(token, getSecretKey())
    return payload.admin === true
  } catch {
    return false
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_MAX_AGE_SECONDS,
}
