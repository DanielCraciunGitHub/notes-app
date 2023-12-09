import { Text } from "@mantine/core"

import { ColorSchemeToggle } from "@/components/ui/ColorSchemeToggle"
import AuthButton from "@/components/AuthButton"

import { serverClient } from "./_trpc/serverClient"

export const dynamic = "force-dynamic"

export default async function Home() {
  const session = await serverClient.userRouter.getSession()
  const usersList = await serverClient.userRouter.getAllUsers()

  return (
    <div>
      <Text
        size="xl"
        style={{
          fontWeight: "bold",
        }}
      >
        You are logged in as {session?.user?.email ?? "nobody"}
      </Text>
      <AuthButton serverSession={session} />

      {usersList.map((user) => (
        <Text key={user.id}>{user.email}</Text>
      ))}
      <ColorSchemeToggle />
    </div>
  )
}
