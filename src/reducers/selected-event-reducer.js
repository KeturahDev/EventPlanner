export default (state = {}, action) => {
  switch(action.type) {
    case "SELECT_EVENT":
      const {title, host, date} = action;
      return {title, host, date};
    default:
      return state;
  }
}