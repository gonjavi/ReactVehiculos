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
    fetch('/api/carros',
      {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(res => res.json())
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
      });
  };
}

export { traerCarros }

