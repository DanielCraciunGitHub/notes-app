import { userRouter } from "./routers/userRouter"
import { router } from "./trpc"

export const appRouter = router({
  userRouter,
})

export type AppRouter = typeof appRouter
