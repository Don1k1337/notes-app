import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Router from "./router/router";

const queryClient = new QueryClient();
const rootElement = document.getElementById('root') as HTMLElement;
const routesConfig = createBrowserRouter(Router)

ReactDOM.createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
           <RouterProvider router={routesConfig}/>
    </QueryClientProvider>
)
