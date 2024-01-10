"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import { navbarLinks } from "@/config"
import { Stack } from "@mantine/core"
import { Session } from "next-auth/types"

import classes from "@/styles/Navbar.module.css"

import AuthButton from "./AuthButton"
import AddNoteModal from "./modals/AddNoteModal"
import { NavbarLink } from "./NavbarLink"

interface NavbarProps {
  session: Session | null
}

export function Navbar({ session }: NavbarProps) {
  const segment = useSelectedLayoutSegment()

  const mainNavbarLinks = navbarLinks.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.label === (segment ?? "")}
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
