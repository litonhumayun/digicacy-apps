import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <ToastContainer position="top-right" />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
