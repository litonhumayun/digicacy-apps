import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Layout from "../Components/Layout/Layout";
import MyInstallation from "../Pages/MyInstallation/MyInstallation";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const response = await fetch("/apps.json");
          const data = await response.json();
          //   console.log(data);
          return data;
        },
      },
      {
        path: "/apps",
        loader: async () => {
          const response = await fetch("/apps.json");
          const data = await response.json();
          return data;
        },
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: async ({ params }) => {
          console.log(params);
          const response = await fetch("/apps.json");
          const apps = await response.json();
          const app = apps.find((a) => a.id === Number(params.id));
          if (!app) throw new Error("App Not Found");
          return app;
        },
      },
      { path: "/my-installation", Component: MyInstallation },
    ],
  },
]);
