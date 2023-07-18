const handlerPostContacto = (req, res) => {
  try {
    const { name, email } = req.body;
    res.status(200).send(`Llego a post contacto con ${name} ${email}`);
  } catch (error) {
    res.status(400).json("hubo un error");
  }
};
module.exports = handlerPostContacto;
