import axios from "axios";
export const GET_CONTACTOS = "GET_CONTACTOS";
export const GET_CONTACTO_POR_NOMBRE = "GET_CONTACTO_POR_NOMBRE";
const URL = "http://localhost:3001/contactos";

export const getContactos = () => {
  return async (dispatch) => {
    const resp = await axios.get(`${URL}`);
    dispatch({
      type: GET_CONTACTOS,
      payload: resp.data,
    });
  };
};

export const putContacto = (id, body) => {
  return async () => {
    await axios.put(`${URL}/${id}`, body);
  };
};

export const getContactoPorNombre = (name) => {
  return async (dispatch) => {
    const resp = await axios.get(`${URL}/${name}`);
    dispatch({
      type: GET_CONTACTO_POR_NOMBRE,
      payload: resp.data,
    });
  };
};

export const postContacto = (body) => {
  return async () => {
    await axios.post(`${URL}`, body).then((res) => {
      return res.data;
    });
  };
};
