import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <ContactUs/>
        },
      ]
    },
  ]);