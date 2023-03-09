import NotesList from "../components/Notes/NotesList";
import {Outlet} from "react-router-dom";
function App() {
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
