const { Contacto } = require("../db");

const postContacto = async (name, email, tel, message) => {
  const nuevoContacto = await Contacto.create({ name, email, tel, message });

  return nuevoContacto;
};

module.exports = postContacto;
