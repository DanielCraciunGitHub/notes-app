"use client"

import React, { useState } from "react"
import { url } from "@/config"
import { MantineProvider } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"

import { trpc } from "@/app/_trpc/client"

interface ProviderProps {
  children: React.ReactNode
}

export function Provider({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient({}))

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${url}/api/trpc`,
        }),
      ],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}