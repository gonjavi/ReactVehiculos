import axios from 'axios';
import config from '../config/config';

const url = config.url.API_URL;

export const CARRO_REGISTTRO_REQUEST = 'CARRO_REGISTTRO_REQUEST';
export const CARRO_REGISTTRO_SUCCESS = 'CARRO_REGISTTRO_SUCCESS';
export const CARRO_REGISTTRO_FAIL = 'CARRO_REGISTTRO_FAIL';

const registrar = (linea, marca, modelo, color, foto) => async dispatch => {
  dispatch({
    type: CARRO_REGISTTRO_REQUEST,
    payload: {
      linea, marca, modelo, color, foto,
    },
  });

  try {
    const { data } = await axios.post(`${url}/vehiculos`,
      {
        linea, marca, modelo, color, foto,
      });

    dispatch({ type: CARRO_REGISTTRO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CARRO_REGISTTRO_FAIL, payload: error.message });
  }
};

export default registrar;
