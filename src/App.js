import React, { useState } from 'react';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventDetails from './Components/EventDetails';
import NewEventForm from './Components/NewEventForm';
import {connect} from 'react-redux';

function App(props) {
  
  // const [currentPage, setPage] = useState('MainPage');
  // const [selectedEvent, setEvent] = useState({});

  //TODO:

  //add handler functions, enact reducers {dispach(action)}
  //pass preset data into event list through: app -> main -> eventList
  //add firebase
  //add data visualization {google charts? look @ libraries}
  //...
  //profit
  
  const { dispatch } = props;
  function handleChangingView(page) {
    const action = {}; //
    if(page === 'MainPage') {
      action.type = 'SHOW_MAINPAGE';
    } else if(page === 'NewEventForm') {
      action.type = 'SHOW_NEWEVENTFORM';
    } else if(page === 'EventDetails') {
      action.type = 'SHOW_EVENTDETAILS';
    }
    dispatch(action);
  }
  
  function handleChangeSelectedEvent(event) {
    const action = { 
      type: 'SELECT_EVENT', 
      title: event.title, 
      host: event.host, 
      date: event.date, 
      id: event.id
    };
    dispatch(action);
  }

  function setVisibility() {
    if(props.currentPage === 'MainPage') {
      return {component: <MainPage 
        handleChangeViewClick={handleChangingView}
        handleSelectEvent={handleChangeSelectedEvent} />}
    } else if (props.currentPage === 'NewEventForm'){
      return {component: <NewEventForm handleBackToMainPage={handleChangingView} />}
    } else if (props.currentPage === "EventDetails") {
      return {component: <EventDetails handleBackToMainPage={handleChangingView} selectedEvent={props.selectedEvent}/>}
    }
  }

  const currentlyVisible = setVisibility();
  return (
    <React.Fragment>
      <Header />
      {currentlyVisible.component}
      <Footer />
    </React.Fragment>
  )
}
const mapStateToProps = state => ({
  events: state.events,
  presetEvents: state.presetEvents,
  currentPage: state.currentPage,
  selectedEvent: state.selectedEvent
});

App = connect(mapStateToProps)(App);

export default App;