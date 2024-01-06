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
import { DateTimePicker } from "@mantine/dates"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { IconArchive, IconBell, IconTrash } from "@tabler/icons-react"

import { useNotes } from "@/hooks/useNotes"
import { trpc } from "@/app/_trpc/client"

interface NoteModalProps {
  note: Note
}

export function NoteModal({ note }: NoteModalProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const { refreshNotes } = useNotes()

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
            deleted === !note.deleted ||
            reminder !== note.reminder
          ) {
            close()
            await mutateAsync({
              id: note.id,
              body,
              archived,
              reminder,
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
            <DateTimePicker
              {...form.getInputProps("reminder", { type: "input" })}
              leftSection={<IconBell />}
              label={<Text size="sm">Reminder</Text>}
              w={"100%"}
              valueFormat="ddd MMM DD YYYY hh:mm"
              dropdownType="modal"
              minDate={new Date()}
              clearable
              variant="filled"
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
