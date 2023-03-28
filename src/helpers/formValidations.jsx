export const validateFormData = (formData) => {
  let errors = [];
  const isValidEmail = getEmailValidation(formData.email);

  if (Object.values(formData).includes("")) {
    errors = [...errors, "Todos los campos son obligatorios"];
  }

  if (!isValidEmail) errors = [...errors, "El email no es válido"];

  return errors;
};

const getEmailValidation = (email) => {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  return regex.test(email);
};
