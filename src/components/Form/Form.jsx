const Form = ({ client, onSubmit, submitText }) => {
  const formConfig = [
    {
      label: "Nombre",
      id: "name",
      type: "text",
      placeholder: "Nombre del Cliente",
    },
    {
      label: "Empresa",
      id: "company",
      type: "text",
      placeholder: "Empresa del Cliente",
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Email del Cliente",
    },
    {
      label: "Teléfono",
      id: "phone",
      type: "tel",
      placeholder: "Teléfono del Cliente",
    },
    {
      label: "Notas",
      id: "notes",
      type: "textarea",
      placeholder: "Notas del Cliente",
    },
  ];
  return (
    <>
      {formConfig.map((item) => {
        const { label, id, type, placeholder } = item;
        return (
          <div className="mb-4" key={id}>
            <label className="text-gray-800" htmlFor={id}>
              {label}:
            </label>
            {type === "textarea" ? (
              <textarea
                as="textarea"
                id={id}
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                placeholder={placeholder}
                name={id}
                defaultValue={client && client[id]}
              />
            ) : (
              <input
                id={id}
                type={type}
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder={placeholder}
                name={id}
                defaultValue={client && client[id]}
              />
            )}
          </div>
        );
      })}
      <button
        type="submit"
        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg text-white"
      >
        {submitText}
      </button>
    </>
  );
};

export default Form;
