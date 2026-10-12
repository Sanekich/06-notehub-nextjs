# NoteHub — Vite

Vite-powered React application for managing personal notes.

## Setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Set `VITE_NOTEHUB_TOKEN` to your NoteHub API token.
4. Run `npm run dev`.

## Routes

- `/` — application introduction
- `/notes` — searchable, paginated notes with note creation
- `/notes/[id]` — details for one note

The app uses React Router for client-side navigation and TanStack Query for API data.
Note that Vite environment variables prefixed with `VITE_` are included in the client bundle.

## Build

```bash
npm run build
npm run preview
```

Configure `VITE_NOTEHUB_TOKEN` in your deployment environment before building the app.
