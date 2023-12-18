"use client"

import { useState } from "react"
import { navbarLinks } from "@/config"
import { rem, Stack, Tooltip, UnstyledButton } from "@mantine/core"
import { IconHome2, IconLogin, IconLogout } from "@tabler/icons-react"

import classes from "@/styles/Navbar.module.css"

interface NavbarLinkProps {
  icon: typeof IconHome2
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right">
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

export function Navbar() {
  const [active, setActive] = useState(0)

  const links = navbarLinks.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack>
        <NavbarLink icon={IconLogin} label="Login" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  )
}
