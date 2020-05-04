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
  //...
  //profit
  
  function setVisibility() {
    if(currentPage === 'MainPage') {
      return {component: <MainPage 
        handleChangeViewClick={setPage}
        handleSelectEvent={setEvent} />}
    } else if (currentPage === 'NewEventForm'){
      return {component: <NewEventForm handleBackToMainPage={setPage} />}
    } else if (currentPage === "EventDetails") {
      return {component: <EventDetails handleBackToMainPage={setPage} selectedEvent={selectedEvent}/>}
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