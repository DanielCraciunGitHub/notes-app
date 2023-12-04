import { env } from "@/env.mjs"
import { connect } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"

// create database connection
const connection = connect({
  url: env.PLANET_SCALE_DATABASE_URL,
})

export const db = drizzle(connection)
export type DbClient = typeof db
