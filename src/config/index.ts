import { IconArchive, IconBell, IconNote, IconTrash } from "@tabler/icons-react"

export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://recipe-app-danielcraciungithub.vercel.app"

export const navbarLinks = [
  { icon: IconNote, label: "" },
  { icon: IconBell, label: "reminders" },
  { icon: IconArchive, label: "archived" },
  { icon: IconTrash, label: "deleted" },
]
