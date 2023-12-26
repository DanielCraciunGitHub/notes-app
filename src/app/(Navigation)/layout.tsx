import "@mantine/core/styles.css"

import { Metadata } from "next"
import { Box, Divider, Flex, Stack, Text, Title } from "@mantine/core"

import { ColorSchemeToggle } from "@/components/ui/ColorSchemeToggle"
import { Navbar } from "@/components/ui/Navbar"
import NoteGrid from "@/components/NoteGrid"

import { serverClient } from "../_trpc/serverClient"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "App",
}

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await serverClient.userRouter.getSession()

  return (
    <Flex>
      <Box pos="fixed" top="15px" left="20px">
        <ColorSchemeToggle />
      </Box>
      <Navbar session={session} />
      <Box w="100%">
        <Stack ta="center">
          <Title mt={20}>Notes App</Title>
          <Text size="sm">
            Welcome <b>{session?.user.name}</b>
          </Text>
          <Divider my="sm" w="50%" mx="auto" />

          {children}
        </Stack>
      </Box>
    </Flex>
  )
}
