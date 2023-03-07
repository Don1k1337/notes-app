import {createBrowserRouter} from 'react-router-dom'
import App from "../layouts/App.jsx";
import AddNewNote from "../components/Notes/AddNewNote.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
          { path: "/",  element: <App />,
              children: [
                  { path: "/create", element: <AddNewNote /> }
              ]
          }
      ]
    }
]);

export default router;