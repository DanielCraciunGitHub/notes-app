import NoteGrid from "@/components/NoteGrid"

import { serverClient } from "../_trpc/serverClient"

export default async function page() {
  const session = await serverClient.userRouter.getSession()
  const notes = await serverClient.notesRouter.getNotes(session?.user.id)

  return <NoteGrid notes={notes} />
}
