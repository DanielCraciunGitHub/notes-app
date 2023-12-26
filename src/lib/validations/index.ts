import { z } from "zod"

export const noteSchema = z.object({
  userId: z.string().optional(),
  body: z.string().nullable(),
  deleted: z.boolean().nullable(),
  archived: z.boolean().nullable(),
  reminder: z.date().nullable(),
})
