import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Layout from "../Components/Layout/Layout";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/apps", Component: Apps },
      { path: "installation", Component: Installation },
    ],
  },
]);
