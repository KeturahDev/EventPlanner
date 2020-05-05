export default (state = {}, action) => {
  switch(action.type) {
    case "SELECT_EVENT":
      const {title, host, date,  yes, maybe, no} = action;
      return {title, host, date,  yes, maybe, no};
    default:
      return state;
  }
}