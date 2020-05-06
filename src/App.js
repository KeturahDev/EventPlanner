import React, { useState } from 'react';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventDetails from './Components/EventDetails';
import NewEventForm from './Components/NewEventForm';
import {connect} from 'react-redux';
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  
  //TODO:


  // reducers for yes no maybe button functionality
  // -results component: tally the number of yes/no/maybe respmonses.. INCREMENT_VOTE
  // 3 consts : YES< NO< MAYBE,, incrementVote reducer... one action, INCREMENT_VOTE
  // Signin authentication
  // delete/edit functionality of events (people who are admins)
  // add data visualization {google charts? look @ libraries}
  // END OF DAY: each of us walk through the firbase steps verbally 
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
      id: event.id,
      yes: event.yes,
      maybe: event.maybe,
      no: event.no,
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
      <Router >
        <Header />
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
        <Route path="/">
        {currentlyVisible.component}
        </Route>
        </Switch>
        <Footer />
      </Router>
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