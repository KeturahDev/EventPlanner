export default (state = {}, action) => {
  switch(action.type) {
    case "SELECT_EVENT":
      const {title, host, date, id, yes, maybe, no} = action;
      return {title, host, date, id, yes, maybe, no};
    default:
      return state;
  }
}