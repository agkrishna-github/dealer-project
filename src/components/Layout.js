import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet />
    </div>
  );
};

export default Layout;
