import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Page2 from './Page2.tsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

let routes = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/page2", element: <Page2 />}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
