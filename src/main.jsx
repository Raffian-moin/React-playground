import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Ref from './topics/Ref.jsx';
import Component from './topics/Component.jsx';
import ParentComponent from './topics/ParentComponent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <p>404 not found</p>,
  },
  {
    path: "/contact/:id",
    element: <p>Contact Me!</p>,
  },
  {
    path: "/ref",
    element: <Ref />,
  },
  {
    path: "/component",
    element: <Component />,
  },
  {
    path: "component/props",
    element: <ParentComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
