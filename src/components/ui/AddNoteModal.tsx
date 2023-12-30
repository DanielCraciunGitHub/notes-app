"use client"

import { Button, Checkbox, Group, Modal, Stack, Textarea } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { IconArchive, IconBell, IconPlus } from "@tabler/icons-react"

import { useNotes } from "@/hooks/useNotes"
import classes from "@/styles/Navbar.module.css"
import { trpc } from "@/app/_trpc/client"

const NavbarAddNoteButton = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const { refreshNotes } = useNotes()

  const { mutateAsync } = trpc.notesRouter.updateNote.useMutation({})

  const form = useForm({
    initialValues: {
      body: "",
      reminder: false,
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
            await mutateAsync({
              id: undefined,
              body,
              archived,
              reminder: null,
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
          </Group>
        </Stack>
      </Modal>

      <Button variant="subtle" onClick={open} className={classes.link}>
        <IconPlus style={{ width: "20px", height: "20px" }} stroke={1.5} />
      </Button>
    </>
  )
}
export default NavbarAddNoteButton
