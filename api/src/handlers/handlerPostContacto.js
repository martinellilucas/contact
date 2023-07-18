const postContacto = require("../controllers/postContacto");

const handlerPostContacto = async (req, res) => {
  try {
    const { name, email, tel, message } = req.body;
    const nuevoContacto = await postContacto(name, email, tel, message);
    res.status(200).send(nuevoContacto);
  } catch (error) {
    res.status(400).json("hubo un error");
  }
};
module.exports = handlerPostContacto;
