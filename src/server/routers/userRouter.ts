import { db } from "@/db"
import { users } from "@/db/schema"

import { auth } from "@/lib/auth"

import { publicProcedure, router } from "../trpc"

export const userRouter = router({
  getSession: publicProcedure.query(async () => {
    const session = await auth()
    return session
  }),
  getAllUsers: publicProcedure.query(async () => {
    const usersList = await db.select().from(users)
    return usersList
  }),
})
