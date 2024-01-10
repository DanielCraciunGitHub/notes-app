"use client"

import {
  ActionIcon,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons-react"
import cx from "clsx"

import classes from "@/styles/ColorSchemeToggle.module.css"

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })

  return (
    <Group>
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="light"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  )
}
