export const CARRO_ACTUALIZAR_REQUEST = 'CARRO_ACTUALIZAR_REQUEST';
export const CARRO_ACTUALIZAR_SUCCESS = 'CARRO_ACTUALIZAR_SUCCESS';
export const CARRO_ACTUALIZAR_FAIL = 'CARRO_ACTUALIZAR_FAIL';

function carroActualizarReducer(state = {}, action) {
  switch (action.type) {
    case CARRO_ACTUALIZAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CARRO_ACTUALIZAR_SUCCESS:
      return {
        ...state,
        loading: false,
        carroInfo: action.payload,
      };
    case CARRO_ACTUALIZAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: return state;
  }
}

export { carroActualizarReducer };
