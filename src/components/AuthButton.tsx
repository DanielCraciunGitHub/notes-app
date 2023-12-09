"use client"

import { Button } from "@mantine/core"
import { signIn, signOut } from "next-auth/react"
import { Session } from "next-auth/types"

import { trpc } from "@/app/_trpc/client"

interface AuthSession {
  serverSession: Session | null
}

export default function AuthButton({ serverSession }: AuthSession) {
  const { data: session } = trpc.userRouter.getSession.useQuery(undefined, {
    initialData: serverSession,
    // refetchOnMount: false,
  })

  return session?.user ? (
    <Button onClick={() => signOut()}>Sign Out</Button>
  ) : (
    <Button onClick={() => signIn("google")}>Sign In</Button>
  )
}
