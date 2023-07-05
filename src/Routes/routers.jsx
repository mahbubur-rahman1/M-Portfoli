import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import SkilsLink from "../pages/CheackLink/Skils/SkilsLink";
import ProjectsLink from "../pages/CheackLink/Projects/ProjectsLink";
import ContactLink from "../pages/CheackLink/Contact/ContactLink";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'skils',
          element: <SkilsLink></SkilsLink>
        },{
          path: 'projects',
          element: <ProjectsLink></ProjectsLink>
        },
        {
          path:  'contact',
          element: <ContactLink></ContactLink>
        }
      ]
    },
  ]);