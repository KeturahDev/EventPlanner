export default (state = {}, action) => {
  switch(action.type) {
    case "SELECT_EVENT":
      const {title, host, date, id} = action;
      return {title, host, date, id};
    default:
      return state;
  }
}