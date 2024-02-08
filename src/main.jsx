import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";

import Contact from "./components/Contact/Contact.jsx";
import { createBrowserRouter } from "react-router-dom";
import Users from "./components/Users/Users.jsx";
import Github from "./Github/Github.jsx";
// import { createRoutesFromElements } from 'react-router-dom'

//first routing method
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:"",
//     element:<Home/>},
//     {
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:'contact',
//       element:<Contact/>
//     }
//     ]
//   }
// ])

//second routing method

// slash apna app sam mai aajayega uska n=baad nexted elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userid' element={<Users />} />
      <Route path='github' element={<Github/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
