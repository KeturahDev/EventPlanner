export default (state = {}, action) => {
  const { title, host, date, id, yes, maybe, no } = action;
  switch(action.type) {
    case 'ADD_EVENT':
      return {...state, [id]: {title, host, date, id, yes, maybe, no}};
    case 'DELETE_EVENT':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};