"use client"

import { Button } from "@mantine/core"
import { signIn, signOut } from "next-auth/react"
import { Session } from "next-auth/types"

interface AuthSession {
  session: Session | null
}

export default function AuthButton({ session }: AuthSession) {
  return session?.user ? (
    <Button onClick={() => signOut()}>Sign Out</Button>
  ) : (
    <Button onClick={() => signIn("google")}>Sign In</Button>
  )
}
