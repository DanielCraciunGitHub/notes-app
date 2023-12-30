"use client"

import { useState } from "react"
import { navbarLinks } from "@/config"
import { Stack } from "@mantine/core"
import { Session } from "next-auth/types"

import classes from "@/styles/Navbar.module.css"

import AuthButton from "../AuthButton"
import AddNoteModal from "./AddNoteModal"
import { NavbarLink } from "./NavbarLink"

interface NavbarProps {
  session: Session | null
}

export function Navbar({ session }: NavbarProps) {
  const [active, setActive] = useState(0)

  const mainNavbarLinks = navbarLinks.map((link, index) => (
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
        <Stack mt={10}>
          <AddNoteModal />
          {mainNavbarLinks}
        </Stack>
      </div>

      <AuthButton session={session} />
    </nav>
  )
}
