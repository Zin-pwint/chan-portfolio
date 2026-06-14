import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
