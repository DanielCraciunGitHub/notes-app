import { notesRouter } from "./routers/notesRouter"
import { userRouter } from "./routers/userRouter"
import { router } from "./trpc"

export const appRouter = router({
  userRouter,
  notesRouter,
})

export type AppRouter = typeof appRouter
