"use client"

import { Card, Textarea } from "@mantine/core"
import { modals } from "@mantine/modals"

interface NoteModalProps {
  children: React.ReactNode
}

export function NoteModal({ children }: NoteModalProps) {
  const openModal = () =>
    modals.openConfirmModal({
      centered: true,
      withCloseButton: false,
      autoFocus: true,
      children: <Textarea autoFocus>{children}</Textarea>,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    })

  return <Card onClick={openModal}>{children}</Card>
}
