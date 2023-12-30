"use client"

import { Note } from "@/types"
import { Card, Checkbox, Group, Modal, Stack, Textarea } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { IconArchive, IconBell, IconTrash } from "@tabler/icons-react"

import { trpc } from "@/app/_trpc/client"

interface NoteModalProps {
  note: Note
  refreshNotes: () => any
}

export function NoteModal({ note, refreshNotes }: NoteModalProps) {
  const [opened, { open, close }] = useDisclosure(false)

  const { mutateAsync } = trpc.notesRouter.updateNote.useMutation({})

  const form = useForm({
    initialValues: {
      body: note.body,
      reminder: note.reminder,
      archived: note.archived,
      deleted: note.deleted,
    },
  })

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={async () => {
          const { archived, body, reminder, deleted } = form.values

          if (
            body !== note.body ||
            archived === !note.archived ||
            deleted === !note.deleted
          ) {
            close()
            await mutateAsync({
              id: note.id,
              body,
              archived,
              reminder: null,
              deleted,
            })
            refreshNotes()
          } else {
            close()
          }
        }}
        title="Edit Note 📝"
        withCloseButton={false}
      >
        <Stack>
          <Textarea
            placeholder="Write your note"
            autosize
            {...form.getInputProps("body", { type: "input" })}
          />
          <Group>
            <Checkbox
              {...form.getInputProps("reminder", { type: "checkbox" })}
              icon={IconBell}
              label="Reminder"
            />
            <Checkbox
              {...form.getInputProps("archived", { type: "checkbox" })}
              icon={IconArchive}
              label="Archive"
            />

            <Checkbox
              {...form.getInputProps("deleted", { type: "checkbox" })}
              icon={IconTrash}
              label="Delete"
            />
          </Group>
        </Stack>
      </Modal>

      <Card onClick={open}>{note.body}</Card>
    </>
  )
}
