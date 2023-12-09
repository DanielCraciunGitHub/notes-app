import { url } from "@/config"
import { appRouter } from "@/server"
import { httpBatchLink } from "@trpc/client"

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${url}/api/trpc`,
    }),
  ],
})
