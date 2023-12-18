import { IconArchive, IconNote, IconTrash } from "@tabler/icons-react"

export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://recipe-app-danielcraciungithub.vercel.app"

export const navbarLinks = [
  { icon: IconNote, label: "Notes" },
  { icon: IconArchive, label: "Archive" },
  { icon: IconTrash, label: "Deleted" },
]
