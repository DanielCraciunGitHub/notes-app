import {
  Affix,
  Box,
  Center,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core"

import { ColorSchemeToggle } from "@/components/ui/ColorSchemeToggle"
import AuthButton from "@/components/AuthButton"
import { serverClient } from "@/app/_trpc/serverClient"

export const dynamic = "force-dynamic"

export default async function Home() {
  const session = await serverClient.userRouter.getSession()

  return (
    <Box w="100%">
      <Stack>
        <Group>
          <Title>Notes App</Title>
        </Group>
        <Divider my="sm" />
        <Text
          size="xl"
          style={{
            fontWeight: "bold",
          }}
        >
          Hello {session?.user?.name ?? "world"}
        </Text>
        <AuthButton serverSession={session} />
        <Affix position={{ top: 15, left: 20 }}>
          <ColorSchemeToggle />
        </Affix>
      </Stack>
    </Box>
  )
}
