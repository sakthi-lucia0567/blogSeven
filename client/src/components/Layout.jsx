import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="m-auto max-w-4xl">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
