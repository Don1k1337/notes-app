import App from "../layouts/App";
import AddNewNote from "../components/Notes/AddNewNote";
import MainLayout from "../layouts/MainLayout";
import NoteDetail from "../components/Notes/NoteDetail"
import {loader} from "../components/Notes/NoteDetail";
import {Router} from "../types/routerTypes";

const router: Router[] = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
          { path: "/",  element: <App />,
              children: [
                  { path: "/create", element: <AddNewNote /> },
                  { path: "/:id/:slug", element: <NoteDetail />, loader: loader}
              ]
          }
      ]
    }
];

export default router;