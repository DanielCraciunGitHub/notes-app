import Link from "next/link"
import { Button } from "@mantine/core"
import type { IconHome } from "@tabler/icons-react"

import classes from "@/styles/Navbar.module.css"

interface NavbarLinkProps {
  icon: typeof IconHome
  label: string
  active?: boolean
  onClick?(): void
}

export function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) {
  return (
    <Button
      variant="subtle"
      component={Link}
      href={`/${label}`}
      onClick={onClick}
      className={classes.link}
      data-active={active || undefined}
    >
      <Icon style={{ width: "20px", height: "20px" }} stroke={1.5} />
    </Button>
  )
}
