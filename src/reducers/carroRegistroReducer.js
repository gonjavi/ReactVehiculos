export const CARRO_REGISTTRO_REQUEST = 'CARRO_REGISTTRO_REQUEST';
export const CARRO_REGISTTRO_SUCCESS = 'CARRO_REGISTTRO_SUCCESS';
export const CARRO_REGISTTRO_FAIL = 'CARRO_REGISTTRO_FAIL';

function carroRegistroReducer(state={}, action) {
  switch(action.type) {
    case CARRO_REGISTTRO_REQUEST:
      return { loading: true };
    case CARRO_REGISTTRO_SUCCESS:
      return { loading: false, carroInfo: action.payload };
    case CARRO_REGISTTRO_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export { 
  carroRegistroReducer,
}