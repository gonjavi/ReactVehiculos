import {
  CARROS_LIST_SUCCESS,
  CARROS_LIST_REQUEST,
  CARROS_LIST_FAIL,
} from '../constantes/carroConstantes';

function carroListaReducer(state = { recordset: [] }, action) {
  switch (action.type) {
    case CARROS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CARROS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        recordset: action.recordset,
      };
    case CARROS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export { carroListaReducer };

export const getProductsError = state => state.error;
