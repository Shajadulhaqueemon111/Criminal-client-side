import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './AuthProvider/AuthProvider.jsx';
import router from './Components/LayOut/Route/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
<AuthProvider>
<div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
</AuthProvider>
  </React.StrictMode>,

)
