import NoteGrid from "@/app/(notes)/NoteGrid"

export default async function page() {
  // const notes = await serverClient.notesRouter.getNotes()

  // const deletedNotes = notes?.filter((note) => note.deleted === true)

  return <NoteGrid noteType="deleted" />
}
