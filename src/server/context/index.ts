import { auth } from "@/lib/auth"

export const createContext = async () => {
  const session = await auth()

  return {
    session,
  }
}
