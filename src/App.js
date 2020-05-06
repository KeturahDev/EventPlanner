import React from 'react';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventDetails from './Components/EventDetails';
import NewEventForm from './Components/NewEventForm';
import {connect} from 'react-redux';
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
    
  handleChangingView(page) {
    const { dispatch } = this.props;
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
  
  handleChangeSelectedEvent(event) {
    const { dispatch } = this.props;
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
  
  setVisibility() {
    if(this.props.currentPage === 'MainPage') {
      return {component: <MainPage 
        handleChangeViewClick={this.handleChangingView}
        handleSelectEvent={this.handleChangeSelectedEvent} />}
      } else if (this.props.currentPage === 'NewEventForm'){
        return {component: <NewEventForm handleBackToMainPage={this.handleChangingView} />}
      } else if (this.props.currentPage === "EventDetails") {
        return {component: <EventDetails handleBackToMainPage={this.handleChangingView} selectedEvent={this.props.selectedEvent}/>
      }
    }
  }
  
  render() {
    const auth = this.props.firebase.auth();
    let authComponent = null;
    if(!isLoaded(auth)) {
      authComponent = <h1>Loading...</h1>;
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      authComponent = <h1>You need to be signed in to view this page!</h1>
    } 
    if((isLoaded(auth)) && (auth.currentUser != null)) {
      authComponent = this.setVisibility();
    }
    console.log("yoooo", auth);
    return (
      <React.Fragment>
      {console.log("in again?")}
        <Router >
          <Header />
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              {authComponent}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  presetEvents: state.presetEvents,
  currentPage: state.currentPage,
  selectedEvent: state.selectedEvent
});

App = connect(mapStateToProps)(App);

export default withFirestore(App);