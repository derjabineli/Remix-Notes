import { Link } from '@remix-run/react';
import homeStyles from '~/styles/home.css'

export default function Index() {
  return (
    <main id='content'>
      <h1>A better way of keeping track of your notes</h1>
      <p>Try it out and never lose track of your notes</p>
      <p id='cta'>
        <Link to='/notes'>Add Note!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: homeStyles}]
}