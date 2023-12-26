import { Button } from "@mantine/core"
import type { IconHome } from "@tabler/icons-react"
import { signOut } from "next-auth/react"

import classes from "@/styles/Navbar.module.css"

interface SignOutButtonProps {
  icon: typeof IconHome
}

export function SignOutButton({ icon: Icon }: SignOutButtonProps) {
  return (
    <Button
      variant="subtle"
      onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
      className={classes.link}
    >
      <Icon style={{ width: "20px", height: "20px" }} stroke={1.5} />
    </Button>
  )
}
