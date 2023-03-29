import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Layout from "../components/Layout/Layout";
import Index, { loader as clientsLoader } from "../pages/Index";
import NewClient, { action as newClientAction } from "../pages/NewClient";
import { action as deleteClientAction } from "../components/Table/Table";
import UpdateClient, {
  loader as updateClientLoader,
  action as updateClientAction,
} from "../pages/UpdateClient";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // con esta prop definimos que ésta es la config de la ruta principal, la que tiene los children ("/")
        element: <Index />,
        loader: clientsLoader, // manejo del get de datos de clientes
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,
        action: newClientAction, // manejo del submit del formulario
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/clientes/:id/editar",
        element: <UpdateClient />,
        loader: updateClientLoader,
        action: updateClientAction,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/clientes/:id/eliminar",
        action: deleteClientAction,
      },
    ],
  },
]);
