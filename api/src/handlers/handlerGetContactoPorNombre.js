const getContactoPorNombre = require("../controllers/getContactoPorNombre");

const handlerGetContactoPorNombre = async (req, res) => {
  try {
    const { name } = req.params;
    res.status(200).json(await getContactoPorNombre(name));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = handlerGetContactoPorNombre;
