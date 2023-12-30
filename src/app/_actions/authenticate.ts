"use server"

import { auth, signIn, signOut } from "@/lib/auth"

export async function authenticate() {
  const session = await auth()
  if (session) {
    await signOut()
  } else {
    await signIn("google")
  }
}
