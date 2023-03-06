import MainHeader from "./components/MainHeader.jsx";
import NotesList from "./components/Notes/NotesList.jsx";
import {useState} from "react";
import {showModalHandler, hideModalHandler} from "./utils/modalUtils.js";
import {QueryClient, QueryClientProvider} from "react-query";
const queryClient = new QueryClient();
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
      <>

        <MainHeader
            onCreateNote={showModalHandler(setModalIsVisible)}
        />
        <main>
            <QueryClientProvider client={queryClient}>

          <NotesList
              isModalVisible={modalIsVisible}
              onStopNote={hideModalHandler(setModalIsVisible)}
          />
          </QueryClientProvider>

        </main>
      </>
  );
}
export default App
