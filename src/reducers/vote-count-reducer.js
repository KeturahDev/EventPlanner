export default (state = {}, action) => {
  switch(action.type) {
    case "INCREMENT_VOTE":
      // grap the event obj.. change specific vote prop based on action input of col... 
      if(action.col === "yes") {
        //take yes col of object and increement by one... and return that new change... Object assign?
      }
    default:
      return state;
  }
}