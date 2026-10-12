# NoteHub — homework 06

Next.js App Router refactor of the NoteHub application.

## Setup

1. Create a new repository named `06-notehub-nextjs` and copy these files into it.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Set `NEXT_PUBLIC_NOTEHUB_TOKEN` to your NoteHub API token.
5. Run `npm run dev`.

## Routes

- `/` — application introduction
- `/notes` — searchable, paginated notes with note creation
- `/notes/[id]` — details for one note

The `/notes` and `/notes/[id]` pages prefetch data on the server and hydrate TanStack Query on the client. Client-only interactions are kept in `*.client.tsx` files.

## Build

```bash
npm run build
npm start
```

Deploy to Vercel by importing the repository and adding `NEXT_PUBLIC_NOTEHUB_TOKEN` in the project environment variables.
