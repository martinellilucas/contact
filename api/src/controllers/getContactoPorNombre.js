const { Contacto } = require("../db");
const { Op } = require("sequelize");

const getContactoPorNombre = async (name) => {
  const contactos = await Contacto.findAll({
    where: { name: { [Op.iLike]: `${name}%` } },
  });

  return contactos;
};

module.exports = getContactoPorNombre;
