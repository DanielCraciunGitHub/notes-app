"use client"

import { useEffect } from "react"
import { Container, SimpleGrid } from "@mantine/core"

import { useNotes } from "@/hooks/useNotes"

import { NoteModal } from "./NoteModal"

const NoteGrid = () => {
  const { newNotes, refreshNotes } = useNotes()

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {newNotes?.map((note) => (
          <NoteModal key={note.id} note={note} refreshNotes={refreshNotes} />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default NoteGrid
