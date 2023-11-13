import { useLoaderData, useRouteError, Link } from "@remix-run/react";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { links as newNotesLinks } from "~/components/NewNote";
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
  if (!notes || notes.length === 0) {
    throw new Error("You haven't created any notes yet!");
  }
  return notes;
}

export function links() {
  return [...newNotesLinks(), ...noteListLinks()];
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <main className="error">
        <h1>{error.message}</h1>
        <p>
          Create a note <Link to="/createnote">here!</Link>
        </p>
      </main>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
