import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
