import { Notes } from "@/types"
import { Container, SimpleGrid } from "@mantine/core"

import { NoteModal } from "./NoteModal"

interface NoteGridProps {
  notes: Notes
}

const NoteGrid = ({ notes }: NoteGridProps) => {
  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {notes.map((note) => (
          <NoteModal key={note.id} note={note}>
            {note.body}
          </NoteModal>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default NoteGrid
