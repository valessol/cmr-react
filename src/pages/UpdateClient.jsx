import React from "react";
import {
  useNavigate,
  Form as ReactRouterForm,
  useActionData,
  useLoaderData,
  redirect,
} from "react-router-dom";
import Error from "../components/Error/Error";
import Form from "../components/Form/Form";
import { getClientById, putClient } from "../data/clients";
import { validateFormData } from "../helpers/formValidations";

export const loader = async ({ params }) => {
  const client = await getClientById(params.id);
  if (!Object.values(client).length) {
    throw new Response("", {
      status: 404,
      statusText: "No hay resultados",
    });
  }
  return client;
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const id = params.id;

  // Validaciones
  const errors = validateFormData(datos);

  if (errors.length) return errors;

  await putClient(datos, id);

  return redirect("/");
};

const UpdateClient = () => {
  const client = useLoaderData();
  const errors = useActionData();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Actualiza los campos que quieras editar</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errors?.length &&
          errors.map((error, index) => <Error key={index}>{error}</Error>)}

        <ReactRouterForm method="PUT" noValidate>
          <Form submitText="Actualizar Cliente" client={client} />
        </ReactRouterForm>
      </div>
    </>
  );
};

export default UpdateClient;
