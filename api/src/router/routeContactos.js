const { Router } = require("express");

const routeContactos = Router();

routeContactos.get("/", handlerGetContactos);
routeContactos.put("/:id", handlerPutContacto);
routeContactos.get("/:name", handlerGetContactoPorNombre);
routeContactos.delete("/:id", handlerDeleteContacto);
