import Home from "../Components/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";

import {
    createBrowserRouter,

  } from "react-router-dom";
  

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default router