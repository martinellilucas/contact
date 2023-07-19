import { GET_CONTACTOS, GET_CONTACTO_POR_NOMBRE } from "../actions/actions";

const initialState = {
  contactos: [],
  allContactos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTOS:
      return {
        ...state,
        contactos: [...action.payload],
        allContactos: [...action.payload],
      };
    case GET_CONTACTO_POR_NOMBRE:
      return {
        ...state,
        allContactos: [...state.contactos],
        contactos: [...action.payload],
      };
    default:
      return { ...state };
  }
};

export default reducer;
