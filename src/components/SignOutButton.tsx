import { Button } from "@mantine/core"
import type { IconHome } from "@tabler/icons-react"

import classes from "@/styles/Navbar.module.css"
import { authenticate } from "@/app/_actions/authenticate"

interface SignOutButtonProps {
  icon: typeof IconHome
}

export function SignOutButton({ icon: Icon }: SignOutButtonProps) {
  return (
    <Button
      variant="subtle"
      onClick={() => authenticate()}
      className={classes.link}
    >
      <Icon style={{ width: "20px", height: "20px" }} stroke={1.5} />
    </Button>
  )
}
