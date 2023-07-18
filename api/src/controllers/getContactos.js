const { Contacto } = require("../db");

const getContactos = async () => {
  const contactos = await Contacto.findAll();

  return contactos;
};

module.exports = getContactos;
