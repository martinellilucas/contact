const handlerGetContactoPorNombre = (req, res) => {
  try {
    const { name } = req.params;
    res.status(200).json(`Llego a get by ${name} contactos`);
  } catch (error) {
    res.status(400).json("hubo un error");
  }
};
module.exports = handlerGetContactoPorNombre;
