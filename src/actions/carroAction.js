import axios from 'axios';
import config from '../config/config';
import { CARROS_LIST_SUCCESS, CARROS_LIST_REQUEST, CARROS_LIST_FAIL } from '../constantes/carroConstantes';

const url = config.url.API_URL;

function fetchProductsSuccess(recordset) {
  return {
    type: CARROS_LIST_SUCCESS,
    recordset,
  };
}

function traerCarros() {
  return dispatch => {
    dispatch({ type: CARROS_LIST_REQUEST });
    axios.get(`${url}/vehiculos`)
      .then(res => {
        dispatch(fetchProductsSuccess(res.data.vehiculos));
      })
      .catch(error => {
        dispatch({ type: CARROS_LIST_FAIL, error });
      });
  };
}

export default traerCarros;
