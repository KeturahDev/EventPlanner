export default (state = {}, action) => {
  const { title, host, date, id } = action;
  switch(action.type) {
    case 'ADD_EVENT':
      return {...state, [id]: {title, host, date, id}};
    case 'DELETE_EVENT':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};