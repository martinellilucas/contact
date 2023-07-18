const putContacto = require("../controllers/putContacto");

const handlerPutContactos = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    res.status(200).json(await putContacto(id, comment));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = handlerPutContactos;
