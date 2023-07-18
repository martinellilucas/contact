const getContactos = require("../controllers/getContactos");

const handlerGetContactos = async (req, res) => {
  try {
    const contactos = await getContactos();
    res.status(200).json(contactos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = handlerGetContactos;
