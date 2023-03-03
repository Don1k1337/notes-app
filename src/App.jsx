import MainHeader from "./components/MainHeader.jsx";
import NotesList from "./components/Notes/NotesList.jsx";
import {useState} from "react";
import {showModalHandler, hideModalHandler} from "./utils/modalUtils.js";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
      <>
        <MainHeader
            onCreateNote={showModalHandler(setModalIsVisible)}
        />
        <main>
          <NotesList
              isModalVisible={modalIsVisible}
              onStopNote={hideModalHandler(setModalIsVisible)}
          />
        </main>
      </>
  );
}
export default App
