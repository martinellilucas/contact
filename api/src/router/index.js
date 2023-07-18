const { Router } = require("express");
const routeContactos = require("./routeContactos.js");

const router = Router();

router.use("/contactos", routeContactos);

module.exports = router;
