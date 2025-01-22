import React from "react";
import { createRoot } from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet, ScrollRestoration} from "react-router-dom"
import "./index.css"
import Home from "./components/HomePage/Home";


const appRouter = createBrowserRouter([
    {
    
        path:"/",
        element:<Home />,
        children:[
            {
                path:"",
                element:<Home />
            }
        ]

    }
])


const container = document.getElementById("container");
const root = createRoot(container);

root.render( <React.StrictMode> <RouterProvider router={appRouter} /> </React.StrictMode>);