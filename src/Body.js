import React, { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
