import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ data, columns }) => {
  const navigate = useNavigate();

  return (
    <>
      {data.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="p-2">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-6 space-y-2">
                  <p className="text-2xl text-gray-800">{item.name}</p>
                  <p>{item.company}</p>
                </td>
                <td className="p-6">
                  <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">
                      Email:{" "}
                    </span>
                    {item.email}
                  </p>
                  <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">
                      Tel:{" "}
                    </span>
                    {item.phone}
                  </p>
                </td>
                <td className="p-6 flex gap-3">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${item.id}/editar`)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p classname="text-center mt-10">No hay clientes Cargados</p>
      )}
    </>
  );
};

export default Table;
