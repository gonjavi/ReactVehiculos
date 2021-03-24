import axios from 'axios';
import { CARROS_LIST_SUCCESS, CARROS_LIST_REQUEST, CARROS_LIST_FAIL } from '../constantes/carroConstantes';

function fetchProductsSuccess(recordset) {
  return {
    type: CARROS_LIST_SUCCESS,
    recordset,
  };
}

function traerCarros() {
  return dispatch => {
    dispatch({ type: CARROS_LIST_REQUEST });
    axios.get('http://localhost:3001/vehiculos')
      .then(res => {
        dispatch(fetchProductsSuccess(res.data.vehiculos));
      })
      .catch(error => {
        dispatch({ type: CARROS_LIST_FAIL, error });
      });
  };
}

export default traerCarros;
