import { Button } from "@mantine/core"
import type { IconHome } from "@tabler/icons-react"
import { signIn } from "next-auth/react"

import classes from "@/styles/Navbar.module.css"

interface LoginButtonProps {
  icon: typeof IconHome
}

export function LoginButton({ icon: Icon }: LoginButtonProps) {
  return (
    <Button
      variant="subtle"
      onClick={() => signIn("google")}
      className={classes.link}
    >
      <Icon style={{ width: "20px", height: "20px" }} stroke={1.5} />
    </Button>
  )
}
