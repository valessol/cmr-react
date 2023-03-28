import React from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../components/Table/Table";
import { columns } from "../constants/clientsTableColumns";
import { getClients } from "../data/clients";

export const loader = () => {
  return getClients();
};

const Index = () => {
  const clients = useLoaderData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clients.length ? (
        <Table data={clients} columns={columns} />
      ) : (
        <p className="text-center mt-10">No hay clientes Cargados</p>
      )}
    </>
  );
};

export default Index;
