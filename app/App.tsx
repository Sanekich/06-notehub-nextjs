import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import HomePage from "./page";
import NotesClient from "./notes/Notes.client";
import NoteDetailsClient from "./notes/[id]/NoteDetails.client";

export default function App() {
  return (
    <TanStackProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesClient />} />
          <Route path="/notes/:id" element={<NoteDetailsClient />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TanStackProvider>
  );
}
