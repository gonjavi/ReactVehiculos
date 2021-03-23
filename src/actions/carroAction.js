import axios from 'axios';
import { CARROS_LIST_SUCCESS, CARROS_LIST_REQUEST, CARROS_LIST_FAIL } from '../constantes/carroConstantes';

function traerCarros() {
  return dispatch => {
    dispatch({ type: CARROS_LIST_REQUEST });
    axios.get('http://localhost:3001/vehiculos')
      .then(function(res) {
        dispatch(fetchProductsSuccess(res.data.vehiculos));
       console.log(res.data.vehiculos);
      })
      .catch(error => console.log(error))
   /*  fetch('http://localhost:3001/vehiculos',
      {
        headers: {
          'content-type': 'application/json',
        },
      })
      
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res.recordset));
        return res;
      })
      .catch(error => {
        dispatch({ type: CARROS_LIST_FAIL, error });
        console.log(error);
      });*/
  }; 
}

function fetchProductsSuccess(recordset) {
  return {
    type: CARROS_LIST_SUCCESS,
    recordset,
  };
}

export { traerCarros };
