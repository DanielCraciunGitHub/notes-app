import "@mantine/core/styles.css"

import { Metadata } from "next"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"

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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
      </body>
    </html>
  )
}
