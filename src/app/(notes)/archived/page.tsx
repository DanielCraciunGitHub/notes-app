import NoteGrid from "@/components/NoteGrid"

export default async function page() {
  // const notes = await serverClient.notesRouter.getNotes()

  // const archivedNotes = notes?.filter((note) => note.archived === true)

  return <NoteGrid />
}
