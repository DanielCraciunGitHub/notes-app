import { FC } from "react"
import {
  Box,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core"

import { NoteModal } from "./NoteModal"

interface NoteGridProps {}

const NoteGrid: FC<NoteGridProps> = ({}) => {
  return (
    <Box w="100%">
      <Stack>
        <Title ta="center" mt={20}>
          Notes App
        </Title>

        <Divider my="sm" w="50%" mx="auto" />

        <Container>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            <NoteModal>casdfklasdjf;aklsjdf;alkdfj;alsdkjfa;lsdjf;a</NoteModal>
            <NoteModal>casdfklasdjf;aklsjdf;alkdfj;alsdkjfa;lsdjf;a</NoteModal>
            <NoteModal>casdfklasdjf;aklsjdf;alkdfj;alsdkjfa;lsdjf;a</NoteModal>
          </SimpleGrid>
        </Container>
      </Stack>
    </Box>
  )
}

export default NoteGrid
