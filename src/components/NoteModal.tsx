"use client"

import { Note } from "@/types"
import { Card, Chip, ChipGroup, Group, Stack, Textarea } from "@mantine/core"
import { useForm } from "@mantine/form"
import { modals } from "@mantine/modals"
import { IconArchive, IconBell } from "@tabler/icons-react"

interface NoteModalProps {
  children?: React.ReactNode
  note?: Note
}

export function NoteModal({ children, note }: NoteModalProps) {
  const form = useForm({
    initialValues: {
      body: note?.body,
    },
  })

  const openModal = () =>
    modals.open({
      title: "Edit Note 📝",
      centered: true,
      withCloseButton: false,
      autoFocus: true,
      size: "lg",

      children: (
        <Stack>
          <Textarea placeholder="Write your note" autosize />
          <ChipGroup multiple>
            <Group>
              <Chip value="1">
                <IconBell stroke={1.5} />
              </Chip>
              <Chip value="2">
                <IconArchive stroke={1.5} />
              </Chip>
            </Group>
          </ChipGroup>
        </Stack>
      ),

      onClose: () => {
        console.log("Cancel")
      },
    })

  return <Card onClick={openModal}>{children}</Card>
}
