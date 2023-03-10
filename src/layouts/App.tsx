import NotesList from "../components/Notes/NotesList";
import {Outlet} from "react-router-dom";
import React from "react";

const App: React.FC = () => {
  return (
      <>
        <Outlet />
        <main>
          <NotesList />
        </main>
      </>
  );
}
export default App
