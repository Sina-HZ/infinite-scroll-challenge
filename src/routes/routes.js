import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@views/Home";
import NoMatch from "@views/NoMatch";
import Restaurants from "@views/Restaurants";

import { Paths } from "./urls";

const router = createBrowserRouter([
  {
    path: Paths.root,
    element: <Home />,
  },
  {
    path: Paths.vendorsList,
    element: <Restaurants />,
  },
  {
    path: Paths.notfound,
    element: <NoMatch />,
  },
]);

export default router;
