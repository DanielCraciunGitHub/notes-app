import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"

import { Metadata } from "next"
import { ColorSchemeScript } from "@mantine/core"

import { Provider } from "@/components/providers"

export const metadata: Metadata = {
  title: "App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
