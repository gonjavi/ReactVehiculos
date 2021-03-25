import axios from 'axios';
import config from '../config/config';

export const CARRO_ACTUALIZAR_REQUEST = 'CARRO_ACTUALIZAR_REQUEST';
export const CARRO_ACTUALIZAR_SUCCESS = 'CARRO_ACTUALIZAR_SUCCESS';
export const CARRO_ACTUALIZAR_FAIL = 'CARRO_ACTUALIZAR_FAIL';

const url = config.url.API_URL;

const actualizar = (id, linea, marca, modelo, color, foto) => async dispatch => {
  dispatch({
    type: CARRO_ACTUALIZAR_REQUEST,
    payload: {
      linea, marca, modelo, color, foto,
    },
  });

  try {
    const { data } = await axios.put(`${url}/vehiculo/${id}`,
      {
        linea, marca, modelo, color, foto,
      });
    dispatch({ type: CARRO_ACTUALIZAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CARRO_ACTUALIZAR_FAIL, payload: error.message });
  }
};

export { actualizar };
