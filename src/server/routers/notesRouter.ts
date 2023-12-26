import { randomUUID } from "crypto"
import { db } from "@/db"
import { notes } from "@/db/schema"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { noteSchema } from "@/lib/validations"

import { publicProcedure, router } from "../trpc"

export const notesRouter = router({
  getNotes: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) => {
      const userNotes = await db
        .select()
        .from(notes)
        .where(eq(notes.userId, input!))

      return userNotes
    }),
  addNote: publicProcedure
    .input(noteSchema.omit({ deleted: true }))
    .mutation(async ({ input }) => {
      const { archived, body, reminder, userId } = input

      console.log(archived)
      if (input.userId && input.body !== "") {
        await db.insert(notes).values({
          reminder,
          archived,
          body,
          userId: userId!,
        })
      }
    }),
})
