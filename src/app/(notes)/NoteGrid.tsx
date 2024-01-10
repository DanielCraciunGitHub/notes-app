"use client"

import { Container, SimpleGrid } from "@mantine/core"

import { useNotes } from "@/hooks/useNotes"
import { DeletedNoteModal } from "@/components/modals/DeletedNoteModal"
import { NoteModal } from "@/components/modals/NoteModal"

interface NoteGridProps {
  noteType?: "archived" | "deleted" | "reminders"
}

const NoteGrid = ({ noteType }: NoteGridProps) => {
  const { allNotes } = useNotes()

  let notes = allNotes

  switch (noteType) {
    case "archived":
      notes = allNotes?.filter((note) => note.archived === true)
      break
    case "deleted":
      notes = allNotes?.filter((note) => note.deleted === true)
      break
    case "reminders":
      notes = allNotes?.filter((note) => note.reminder !== null)
      break
    default:
      notes = allNotes?.filter(
        (note) => note.archived === false && note.deleted === false
      )
      break
  }

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {noteType === "deleted"
          ? notes?.map((note) => <DeletedNoteModal key={note.id} note={note} />)
          : notes?.map((note) => <NoteModal key={note.id} note={note} />)}
      </SimpleGrid>
    </Container>
  )
}

export default NoteGrid
