import Home from "../Components/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";

import {
    createBrowserRouter,

  } from "react-router-dom";
import Flights from "../Pages/Flights";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
  

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/flights',
                element:<Flights></Flights>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])
export default router