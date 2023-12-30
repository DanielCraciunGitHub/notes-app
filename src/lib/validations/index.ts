import { z } from "zod"

export const noteSchema = z.object({
  id: z.string().optional(),
  body: z.string(),
  deleted: z.boolean(),
  archived: z.boolean(),
  reminder: z.date().nullable(),
})
