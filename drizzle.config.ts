import type { Config } from "drizzle-kit"

try {
  process.loadEnvFile(".env")
} catch {
  // .env not present (e.g. env vars already provided by the host) — ignore
}

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config
