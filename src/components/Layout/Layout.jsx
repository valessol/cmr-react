import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

// El componente Outlet actúa como contenedro dinámico, permitiendo pasarle childrens al componente Layout, desde el objeto de configuración del router

const Layout = () => {
  return (
    <>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            CRM - Clientes
          </h2>
          <Navigation />
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
