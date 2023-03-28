import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationPaths } from "../../constants/navigation";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="mt-10">
      {navigationPaths.map(({ path, label }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            to={path}
            className={`text-2xl block mt-2 hover:text-blue ${
              isActive ? "text-blue-300" : "text-white"
            }`}
            key={path}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
