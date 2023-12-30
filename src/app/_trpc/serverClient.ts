import { appRouter } from "@/server"
import { createContext } from "@/server/context"
import { createCallerFactory } from "@/server/trpc"

const createCaller = createCallerFactory(appRouter)

export const serverClient = createCaller(await createContext())
