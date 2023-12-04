import type { Config } from "drizzle-kit"

import { env } from "./src/env.mjs"

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    uri: env.PLANET_SCALE_DATABASE_URL,
  },
  driver: "mysql2",
  breakpoints: true,
} satisfies Config
