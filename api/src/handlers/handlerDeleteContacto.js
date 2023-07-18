const handlerDeleteContacto = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(`Llego a delete contactos con el id = ${id}`);
  } catch (error) {
    res.status(400).json("hubo un error");
  }
};
module.exports = handlerDeleteContacto;
