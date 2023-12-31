import NoteGrid from "@/components/NoteGrid"

export default async function page() {
  // const notes = await serverClient.notesRouter.getNotes()

  // const reminders = notes?.filter((note) => note.reminder !== null)

  return <NoteGrid noteType="reminders" />
}
