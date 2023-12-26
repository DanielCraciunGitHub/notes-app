"use client"

import {
  Button,
  Checkbox,
  ChipGroup,
  Group,
  Modal,
  Stack,
  Textarea,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { IconArchive, IconBell, IconPlus } from "@tabler/icons-react"
import { Session } from "next-auth/types"

import classes from "@/styles/Navbar.module.css"
import { trpc } from "@/app/_trpc/client"

interface NavbarAddNoteButtonProps {
  session: Session | null
}

const NavbarAddNoteButton = ({ session }: NavbarAddNoteButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const { mutate } = trpc.notesRouter.addNote.useMutation({})

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
        onClose={() => {
          const { archived, body, reminder } = form.values
          console.log(form.values)

          console.log(archived)

          mutate({
            body,
            archived,
            reminder: null,
            userId: session?.user.id,
          })

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
          <ChipGroup multiple>
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
          </ChipGroup>
        </Stack>
      </Modal>

      <Button
        key="Add Note"
        variant="subtle"
        onClick={open}
        className={classes.link}
      >
        <IconPlus style={{ width: "20px", height: "20px" }} stroke={1.5} />
      </Button>
    </>
  )
}
export default NavbarAddNoteButton
