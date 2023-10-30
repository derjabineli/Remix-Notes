import styles from "./NewNote.css";
import { Form } from "@remix-run/react";

export default function NewNote() {
  return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </Form>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
