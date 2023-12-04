import { db } from "@/db"
import { users } from "@/db/schema"
import { Text } from "@mantine/core"

import { auth } from "@/lib/auth"
import { ColorSchemeToggle } from "@/components/ui/ColorSchemeToggle"
import AuthButton from "@/components/AuthButton"

export default async function Home() {
  const session = await auth()
  const usersList = await db.select().from(users)

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
      <AuthButton session={session} />

      {usersList.map((user) => (
        <Text key={user.id}>{user.email}</Text>
      ))}
      <ColorSchemeToggle />
    </div>
  )
}
