export default(state ='MainPage', action) => {
  switch(action.type){
    case "SHOW_MAINPAGE":    
      return "MainPage"
    case "SHOW_EVENTDETAILS":
      return "EventDetails"
    case "SHOW_NEWEVENTFORM":
      return "NewEventForm"
    default:
      return state;
  }     
}

// MainPage EventDetails NewEventForm