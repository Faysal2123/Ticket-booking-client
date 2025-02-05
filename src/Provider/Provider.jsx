import MainLayouts from "../Layouts/MainLayouts";

import {
    createBrowserRouter,

  } from "react-router-dom";
  

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
    }
])
export default router