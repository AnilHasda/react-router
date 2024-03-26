import React from 'react'
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from "react-router-dom";
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import "./assets/css/style.css";
import ContactUs from './components/contact/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';
import NotFound from './components/notFound/NotFound';
import Params from './components/params/Params';
import Github from './components/github/Github';
// let router=createBrowserRouter([{
//   path:"/",
//   element:<Layout />,
//   children:[
//     {
//     path:"",
//     element:<Home />
//     },
//     {
//       path:"/contactUs",
//       element:<ContactUs />
//     },
//     {
//       path:"/params/:data",
//       element:<Params />
//     },
//     {
//       path:"/aboutUs",
//       element:<AboutUs />
//     },
//     {
// path:"*",
// element:<NotFound />
//     }
//   ]
// }])
let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path=""element={<Layout/>}>
<Route path=""element={<Home />}/>
<Route path="aboutUs"element={<AboutUs />}/>
<Route path="ContactUS"element={<ContactUs />}/>
<Route path="params/:data"element={<Params />}/>
<Route path="github"element={<Github />} />
<Route path="*"element={<NotFound />}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
