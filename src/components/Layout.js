import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Outlet />
    </div>
  );
};

export default Layout;
