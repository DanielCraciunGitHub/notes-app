import { notes } from "@/db/schema"
import { InferSelectModel } from "drizzle-orm"

export type Note = InferSelectModel<typeof notes>

export type Notes = Note[] | null | undefined
