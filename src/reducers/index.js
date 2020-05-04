import eventsReducer from "./events-reducer";
import selectedEventReducer from "./selected-event-reducer";
import currentPageReducer from "./current-page-reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducer({
  events: eventsReducer,
  currentPage: currentPageReducer,
  selectedEvent: selectedEventReducer
});

export default rootReducer;