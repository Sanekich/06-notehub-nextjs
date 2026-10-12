# NoteHub — homework 06

Next.js App Router version of NoteHub.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_NOTEHUB_TOKEN` in `.env.local` before loading the notes page.

Routes:

- `/` — home page
- `/notes` — searchable notes list
- `/notes/[id]` — note details

The notes routes use server-side TanStack Query prefetching with hydration and client components for interactive logic.
