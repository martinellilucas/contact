const handlerGetContactos = (req, res) => {
  try {
    res.status(200).json("Llego a get contactos");
  } catch (error) {
    res.status(400).json("hubo un error");
  }
};
module.exports = handlerGetContactos;
