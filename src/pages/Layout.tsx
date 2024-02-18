import React from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";

function Layout() {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
