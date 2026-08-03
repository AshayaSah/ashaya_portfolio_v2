import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "@/db/schema"

// Next.js loads .env itself before running app code; standalone scripts
// (db/seed.ts, drizzle-kit) do not, so load it lazily here if missing.
// ES module imports are hoisted, so this must live in the same module that
// reads process.env.DATABASE_URL, not in the script that imports it.
if (!process.env.DATABASE_URL) {
  try {
    process.loadEnvFile(".env")
  } catch {
    // .env not present — assume env vars are already provided by the host
  }
}

declare global {
  var __dbClient: postgres.Sql | undefined
}

const client = globalThis.__dbClient ?? postgres(process.env.DATABASE_URL!, { max: 10 })

if (process.env.NODE_ENV !== "production") {
  globalThis.__dbClient = client
}

export const db = drizzle(client, { schema })
