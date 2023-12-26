"use client"

import { IconLogin, IconLogout } from "@tabler/icons-react"
import { Session } from "next-auth/types"

import { LoginButton } from "./LoginButton"
import { SignOutButton } from "./SignOutButton"

interface AuthSession {
  session: Session | null
}

export default function AuthButton({ session }: AuthSession) {
  return session ? (
    <SignOutButton icon={IconLogout} />
  ) : (
    <LoginButton icon={IconLogin} />
  )
}
