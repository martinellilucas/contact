const { Router } = require("express");
const handlerGetContactos = require("../handlers/handlerGetContactos.js");
const handlerPostContacto = require("../handlers/handlerPostContacto.js");
const handlerPutContacto = require("../handlers/handlerPutContacto.js");
const handlerGetContactoPorNombre = require("../handlers/handlerGetContactoPorNombre.js");
const handlerDeleteContacto = require("../handlers/handlerDeleteContacto.js");
const routeContactos = Router();

routeContactos.get("/", handlerGetContactos);
routeContactos.post("/", handlerPostContacto);
routeContactos.put("/:id", handlerPutContacto);
routeContactos.get("/:name", handlerGetContactoPorNombre);
routeContactos.delete("/:id", handlerDeleteContacto);

module.exports = routeContactos;
