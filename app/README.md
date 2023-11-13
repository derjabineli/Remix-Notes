# Quick Notes
#### Video Demo: https://youtu.be/GjtkCCftbw8
#### Description:
####This project is a Notes app built using React.js. I used the React Framework "Remix" as an
alternative to Next.js as Remix utilizes Server Side rendering. The app allows you to view
created notes, and create new notes.

The root.tsx file is the general skeleton of the app. It contains the genreal set up that
will be included on every route as well as some default error handling that will apply to
every error on any route, unless the route has a unique error handler.

The routes folder contains each route that is accessible on my project. The index.tsx file
is the default route for my app. This route generates a simple intro paragraph and a CTA
button to create a new note.

The createnote route allows you to create a new note. The note includes a title and body
and upon submitting generates a accurate time stamp.

The notes route takes you to a page that displays all created notes and their information.