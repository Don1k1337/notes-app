import {LoaderFunction} from 'react-router-dom'
import App from "../layouts/App";
import AddNewNote from "../components/Notes/AddNewNote";
import MainLayout from "../layouts/MainLayout";
import NoteDetail from "../components/Notes/NoteDetail"
import {loader} from "../components/Notes/NoteDetail";

type Router = {
    path: string;
    element: JSX.Element;
    children?: Router[];
    loader?: LoaderFunction;
}

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