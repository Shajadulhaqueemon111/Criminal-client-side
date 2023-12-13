import React from 'react';
import MainLayOut from '../MainLayOut';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../../Pageses/ErrorPage';
import Home from '../../Home';
import Login from '../../Pageses/Login/Login';
import Register from '../../Pageses/Register/Register';
import CaseFile from '../../Criminal/CaseFile';
import ManageCriminal from '../../ManageCriminal/ManageCriminal';




    const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayOut></MainLayOut>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
             path:'/',
             element:<Home></Home>
            },
            {
             path:'/login',
             element:<Login></Login>
            },
            {
             path:'/register',
             element:<Register></Register>
            },
            {
             path:'/case',
             element:<CaseFile></CaseFile>
            },
            {
             path:'/list',
             element:<ManageCriminal></ManageCriminal>
            },
        
          ]
        },
      ]);
   


export default router;