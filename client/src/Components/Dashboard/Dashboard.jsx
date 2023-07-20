import { useEffect, useState } from "react";
import style from "./Dashboard.module.css";
import Login from "./Login/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactoPorNombre,
  getContactos,
  putContacto,
} from "../../redux/actions/actions";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
  FormLabel,
} from "@chakra-ui/react";

const Dashboard = () => {
  const [access, setAccess] = useState(false);
  const [comentario, setComentario] = useState("");
  const contactos = useSelector((state) => state.contactos);
  const dispatch = useDispatch();
  const email = "nataliacolman.18@gmail.com";
  const password = "Dakota94";

  useEffect(() => {
    dispatch(getContactos());
  }, []);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    dispatch(putContacto(id, { comment: comentario }));
    setComentario("");
  };
  const handleSearch = (e) => {
    const value = e.target.value;

    dispatch(getContactoPorNombre(value));
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setComentario(value);
  };

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
    }
  };
  return (
    <div className={style.body}>
      {access ? (
        <div>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className={style.titleContainer}
          >
            <h1 className={style.title}>Panel</h1>
          </div>
          <hr></hr>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className={style.subtitleContainer}
          >
            <h2 className={style.subTitle}>Contactos</h2>
          </div>
          <div className={style.searchBar}>
            <input
              className={style.input}
              name="search"
              onChange={handleSearch}
              placeholder="Buscar 🔍"
            ></input>
          </div>
          <table className={style.tabla}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Whatsapp</th>
                <th>Mensaje</th>
                <th>Comentario</th>
                <th>Creado</th>
                <th>Actualizado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {contactos?.map((contacto) => (
                <tr key={contacto?.id}>
                  <td>{contacto?.name}</td>
                  <td>{contacto?.email}</td>
                  <td>{contacto?.tel}</td>
                  <td>{contacto?.message}</td>
                  <td>{contacto?.comment}</td>
                  <td>{contacto?.createdAt}</td>
                  <td>{contacto?.updatedAt}</td>
                  <td>
                    <Popover>
                      <PopoverTrigger>
                        <Button>Comentar</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader color="blackAlpha.900">
                          Agregar un comentario
                        </PopoverHeader>
                        <PopoverCloseButton color="red"></PopoverCloseButton>
                        <PopoverBody>
                          <form
                            onSubmit={(e) => {
                              handleSubmit(e, contacto.id);
                            }}
                          >
                            <FormLabel color="blackAlpha.900" htmlFor="comment">
                              Comentario
                            </FormLabel>
                            <Input
                              value={comentario}
                              type="text"
                              onChange={handleChange}
                              color="blackAlpha.700"
                              name="comment"
                              placeholder="Comentario"
                            ></Input>
                            <Button type="submit" m="10px" colorScheme="blue">
                              Guardar
                            </Button>
                          </form>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Login login={login}></Login>
      )}
    </div>
  );
};

export default Dashboard;
