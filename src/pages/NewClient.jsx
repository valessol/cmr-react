import React from "react";
import {
  useNavigate,
  Form as ReactRouterForm,
  useActionData,
} from "react-router-dom";
import Error from "../components/Error/Error";
import Form from "../components/Form/Form";
import { validateFormData } from "../helpers/formValidations";

export const action = async ({ request }) => {
  const formData = await request.formData();
  //console.log({...formData})

  // Formas de acceder al objeto formData:
  // --1
  // const datos = new FormData()
  // datos.append('nombre', 'Juan')
  // console.log(datos)
  //--2
  const datos = Object.fromEntries(formData);
  console.log(datos);

  // Validaciones
  const errors = validateFormData(datos);

  return errors;
};

const NewClient = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>
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

        <ReactRouterForm method="POST" noValidate>
          <Form submitText="Registrar Cliente" />
        </ReactRouterForm>
      </div>
    </>
  );
};

export default NewClient;
