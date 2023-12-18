import "@mantine/core/styles.css"

import { Metadata } from "next"
import { Box, Flex, Group } from "@mantine/core"

import { Navbar } from "@/components/ui/Navbar"

export const metadata: Metadata = {
  title: "App",
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <Navbar />
      {children}
    </Flex>
  )
}
