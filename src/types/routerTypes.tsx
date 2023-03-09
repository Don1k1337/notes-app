import {LoaderFunction} from "react-router-dom";

export type Router = {
    path: string;
    element: JSX.Element;
    children?: Router[];
    loader?: LoaderFunction;
}