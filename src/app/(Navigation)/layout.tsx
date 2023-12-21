import "@mantine/core/styles.css"

import { Metadata } from "next"
import { Box, Flex } from "@mantine/core"

import { ColorSchemeToggle } from "@/components/ui/ColorSchemeToggle"
import { Navbar } from "@/components/ui/Navbar"

export const metadata: Metadata = {
  title: "App",
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex>
        <Navbar />
        {children}
      </Flex>
      <Box pos="fixed" top="15px" left="20px">
        <ColorSchemeToggle />
      </Box>
    </>
  )
}
