const { Contacto } = require("../db");

const putContacto = async (id, comment) => {
  const updated = await Contacto.update(
    {
      comment: comment,
    },
    { where: { id: id } }
  );

  return await Contacto.findByPk(id);
};

module.exports = putContacto;
