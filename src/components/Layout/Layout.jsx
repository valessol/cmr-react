import React from "react";
import { Outlet } from "react-router-dom";

// El componente Outlet actúa como contenedro dinámico, permitiendo pasarle childrens al componente Layout, desde el objeto de configuración del router

const Layout = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">CRM - React</h1>
      <Outlet />
    </>
  );
};

export default Layout;
