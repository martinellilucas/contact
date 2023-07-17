const validation = (form, error, setError, target) => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (target === "email") {
    if (form.email.length === 0)
      setError({ ...error, email: "Por favor ingrese su email" });
    else if (form.email.length > 35)
      setError({
        ...error,
        email: "El email no puede tener mas de 35 caracteres",
      });
    else if (!validEmail.test(form.email))
      setError({ ...error, email: "Email inválido" });
    else setError({ ...error, email: "" });
  }

  if (target === "name") {
    if (form.name.length === 0)
      setError({
        ...error,
        name: "Por favor ingrese su nombre",
      });
    else setError({ ...error, name: "" });
  }

  if (target === "tel") {
    if (form.tel.length === 0) {
      setError({ ...error, tel: "Por favor ingrese su número de teléfono" });
    }
    if (form.tel.length > 10 || form.tel.length < 10) {
      setError({ ...error, tel: "El número debe tener 10 caracteres" });
    } else setError({ ...error, tel: "" });
  }
};

export default validation;
