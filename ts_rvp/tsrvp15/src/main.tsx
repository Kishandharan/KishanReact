import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Page1 from "./Page1.tsx"
import Page2 from "./Page2.tsx"
import Page3 from "./Page3.tsx"
import NotFoundPage from "./NotFoundPage.tsx"
import './index.css'
import App from './App.tsx'

let router1 = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/page1", element: <Page1 />},
    {path: "/page2", element: <Page2 />},
    {path: "/page3", element: <Page3 />},
    {path: "*", element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
        <RouterProvider router={router1} />
   </StrictMode>,
)
