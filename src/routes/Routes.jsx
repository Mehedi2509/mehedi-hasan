import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <About/>
        },
        {
            path: "/resume",
            element: <Resume/>
        },
        {
            path: "/portfolio",
            element: <Portfolio/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/contact",
            element: <ContactUs/>
        },
      ]
    },
  ]);