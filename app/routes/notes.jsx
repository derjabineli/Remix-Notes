import { useLoaderData } from "@remix-run/react";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import NewNote, { links as newNotesLinks } from "~/components/NewNote";
import { getStoredNotes } from "~/data/notes";

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <main>
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export function links() {
  return [...newNotesLinks(), ...noteListLinks()];
}
