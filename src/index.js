import React from "react";
import { createRoot } from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet, ScrollRestoration} from "react-router-dom"
import "./index.css"
import Home from "./components/HomePage/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";
import LimitedOfferHeader from "./components/headers/LimitedOfferHeader";
import TemporaryError from "./components/ErrorElements/TemporaryError";
import Categories from "./components/categories/Categories";
import SubCategories from "./components/subcategory/SubCategories";


const App = () => {
    return (
        <>
            <ScrollRestoration />
            <LimitedOfferHeader />
            <Header />
            <Outlet />    
            <Footer />
        </>

    )
};


const appRouter = createBrowserRouter([
    {
    
        path:"/",
        element:<App />,
        children:[
            {
                path:"",
                element:<Home />,
                errorElement:<TemporaryError />
            },
            {
                path:"categories/:categoryId",
                element:<SubCategories />,
            }
        ]

    }
]);


const container = document.getElementById("container");
const root = createRoot(container);

root.render( <React.StrictMode> <RouterProvider router={appRouter} /> </React.StrictMode>);