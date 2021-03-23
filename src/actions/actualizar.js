import axios from 'axios';

export const CARRO_ACTUALIZAR_REQUEST = 'CARRO_ACTUALIZAR_REQUEST';
export const CARRO_ACTUALIZAR_SUCCESS = 'CARRO_ACTUALIZAR_SUCCESS';
export const CARRO_ACTUALIZAR_FAIL = 'CARRO_ACTUALIZAR_FAIL';

const actualizar = (id, linea, marca, modelo, color, Foto) => async dispatch => {
  dispatch({
    type: CARRO_ACTUALIZAR_REQUEST,
    payload: {
      linea, marca, modelo, color, Foto,
    },
  });

  try {
    const { data } = await axios.put(`http://localhost:3001/vehiculo/${id}`,
      {
        linea, marca, modelo, color, Foto,
      });
    dispatch({ type: CARRO_ACTUALIZAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CARRO_ACTUALIZAR_FAIL, payload: error.message });
  }
};

export { actualizar };
