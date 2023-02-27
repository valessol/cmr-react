import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import NewClient from "../pages/NewClient";
// createBrowserRouter es una función que permite definir un router por medio de un objeto
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // con esta prop definimos que ésta es la config de la ruta principal, la que tiene los children
        element: <Index />,
      },
      { path: "/clientes/nuevo", element: <NewClient /> },
    ],
  },
]);
