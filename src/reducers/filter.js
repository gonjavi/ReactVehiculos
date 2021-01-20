const filterReducer = (state = 'Todos', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.category;
    default:
      return state;
  }
};

export default filterReducer;