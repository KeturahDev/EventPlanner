import eventsReducer from "./events-reducer";
import selectedEventReducer from "./selected-event-reducer";
import currentPageReducer from "./current-page-reducer";
import {combineReducers} from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  events: eventsReducer,
  currentPage: currentPageReducer,
  selectedEvent: selectedEventReducer,
  firestore: firestoreReducer
});

export default rootReducer;