import { Card, createTheme } from "@mantine/core"

export const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  components: {
    Card: Card.extend({
      styles: {
        root: {
          wordWrap: "break-word",
        },
      },
      defaultProps: {
        withBorder: true,
      },
    }),
  },
})
