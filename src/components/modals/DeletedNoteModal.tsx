"use client"

import { Note } from "@/types"
import {
  Box,
  Card,
  Checkbox,
  Divider,
  Group,
  Modal,
  Stack,
  Text,
  Textarea,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { IconArchive, IconBell, IconTrash } from "@tabler/icons-react"

import { useNotes } from "@/hooks/useNotes"
import { trpc } from "@/app/_trpc/client"

interface NoteModalProps {
  note: Note
}

export function DeletedNoteModal({ note }: NoteModalProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const { refreshNotes } = useNotes()

  const { mutateAsync: updateNote } = trpc.notesRouter.updateNote.useMutation()
  const { mutateAsync: deleteNote } = trpc.notesRouter.deleteNote.useMutation()

  const form = useForm({
    initialValues: {
      body: note.body,
      restore: false,
      deleted: false,
    },
  })

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={async () => {
          const { body, deleted, restore } = form.values

          close()
          if (restore) {
            await updateNote({
              id: note.id,
              body,
              archived: false,
              reminder: null,
              deleted: false,
            })
          } else if (deleted) {
            await deleteNote({
              noteId: note.id,
            })
          }
          refreshNotes()
        }}
        title="Edit Note 📝"
      >
        <Stack>
          <Textarea
            placeholder="Write your note"
            autosize
            {...form.getInputProps("body", { type: "input" })}
            disabled
          />
          <Group>
            <Checkbox
              {...form.getInputProps("restore", { type: "checkbox" })}
              icon={IconArchive}
              label="Restore"
            />

            <Checkbox
              {...form.getInputProps("deleted", { type: "checkbox" })}
              icon={IconTrash}
              label="Delete Permanently"
            />
          </Group>
        </Stack>
      </Modal>

      <Card onClick={open} draggable>
        {note.reminder ? (
          <Group mb={20}>
            <IconBell
              color={note.reminder.getTime() < Date.now() ? "red" : "cyan"}
            />
            <Text>
              {note.reminder.toDateString() +
                " " +
                note.reminder
                  .toLocaleTimeString()
                  .split(":")
                  .slice(0, 2)
                  .join(":")}
            </Text>
          </Group>
        ) : null}
        <Box>{note.body}</Box>
        <Divider mb={10} />

        <Text size="xs" c={"green"}>
          Created:{" "}
          {note.createdAt?.toDateString() +
            " " +
            note.createdAt?.toLocaleTimeString()}
        </Text>
        <Text size="xs" c={"cyan"}>
          {note.updatedAt
            ? `Updated: ${
                note.updatedAt.toDateString() +
                " " +
                note.updatedAt.toLocaleTimeString()
              }`
            : null}
        </Text>
      </Card>
    </>
  )
}
