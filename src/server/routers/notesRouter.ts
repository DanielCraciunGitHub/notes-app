import { db } from "@/db"
import { notes } from "@/db/schema"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { noteSchema } from "@/lib/validations"

import { publicProcedure, router } from "../trpc"

export const notesRouter = router({
  getNotes: publicProcedure.query(async ({ ctx }) => {
    if (ctx.session) {
      const userNotes = await db
        .select()
        .from(notes)
        .where(eq(notes.userId, ctx.session.user.id))

      return userNotes
    }
    return null
  }),
  updateNote: publicProcedure
    .input(noteSchema)
    .mutation(async ({ input, ctx }) => {
      const { archived, body, id, reminder } = input

      if (ctx.session && body !== "") {
        if (id) {
          await db.update(notes).set(input).where(eq(notes.id, id))
        } else {
          await db
            .insert(notes)
            .values({ body, archived, reminder, userId: ctx.session.user.id })
        }
      }
    }),
  deleteNote: publicProcedure
    .input(z.object({ noteId: z.string() }))
    .mutation(async ({ input }) => {
      await db.delete(notes).where(eq(notes.id, input.noteId))
    }),
})
