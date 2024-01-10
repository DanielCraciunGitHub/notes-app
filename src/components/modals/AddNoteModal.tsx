"use client"

import { Button, Checkbox, Modal, Stack, Text, Textarea } from "@mantine/core"
import { DateTimePicker } from "@mantine/dates"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { IconArchive, IconBell, IconPlus } from "@tabler/icons-react"

import { useNotes } from "@/hooks/useNotes"
import classes from "@/styles/Navbar.module.css"
import { trpc } from "@/app/_trpc/client"

const NavbarAddNoteButton = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const { refreshNotes } = useNotes()

  const { mutateAsync: updateNote } = trpc.notesRouter.updateNote.useMutation()

  const form = useForm({
    initialValues: {
      body: "",
      reminder: null,
      archived: false,
    },
  })

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={async () => {
          const { archived, body, reminder } = form.values

          if (body !== "") {
            close()
            await updateNote({
              id: undefined,
              body,
              archived,
              reminder,
              deleted: false,
            })
            refreshNotes()
          }

          close()

          form.reset()
        }}
        title="New Note 📝"
        withCloseButton={false}
      >
        <Stack>
          <Textarea
            placeholder="Write your note"
            autosize
            {...form.getInputProps("body", { type: "input" })}
          />
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
        </Stack>
      </Modal>

      <Button variant="subtle" onClick={open} className={classes.link}>
        <IconPlus style={{ width: "20px", height: "20px" }} stroke={1.5} />
      </Button>
    </>
  )
}
export default NavbarAddNoteButton
