import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Contact from './Contact.tsx'
import PageNotFound from './PageNotFound.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

let router1 = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/about", element: <About />},
    {path: "/contact/:name", element: <Contact />},
    {path: "*", element: <PageNotFound />}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router1}/>
  </StrictMode>,
)
