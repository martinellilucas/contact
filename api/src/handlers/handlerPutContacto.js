const handlerPutContactos = (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    res
      .status(200)
      .json(
        `Llego a put contacto con el id = ${id} se actualizara el comentario a ${comment}`
      );
  } catch (error) {
    res.status(400).json("hubo un error");
  }
};

module.exports = handlerPutContactos;
