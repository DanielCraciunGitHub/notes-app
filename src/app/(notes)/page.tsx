import NoteGrid from "@/app/(notes)/NoteGrid"

export default async function page() {
  // const notes = await serverClient.notesRouter.getNotes()

  // const allNotes = notes?.filter(
  //   (note) => note.archived === false && note.deleted === false
  // )

  return <NoteGrid />
}
