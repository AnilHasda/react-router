import React from 'react'
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import "./assets/css/style.css";
import ContactUs from './components/contact/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';
import NotFound from './components/notFound/NotFound';
let router=createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[
    {
    path:"",
    element:<Home />
    },
    {
      path:"/contactUs",
      element:<ContactUs />
    },
    {
      path:"/aboutUs/:data",
      element:<AboutUs />
    },
    {
path:"*",
element:<NotFound />
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
