import { trpc } from "@/app/_trpc/client"

export const useNotes = () => {
  const { data: allNotes, refetch: refreshNotes } =
    trpc.notesRouter.getNotes.useQuery(undefined, {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    })

  return {
    allNotes,
    refreshNotes,
  }
}
