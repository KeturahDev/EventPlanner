import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function EventDetails(props) { //button id = prop?
  const {selectedEvent} = props;

  useFirestoreConnect([{ collection: 'events', doc: selectedEvent.id }]);

  const dbSelectedEvent = useSelector(({ firestore: { data } }) => data.events && data.events[selectedEvent.id]);

  // const dbSelectedEvent = useSelector(state => state.firestore.ordered.events);

  // console.log('selectedEvent: ' + selectedEvent);
  if(isLoaded(dbSelectedEvent)) {
    console.log("DB SELECTED:",dbSelectedEvent);
    return (
      <React.Fragment>
        <div style={{ border: "2px solid orange" }}>
          <h3>{selectedEvent.title}</h3>
          <h4>On {dbSelectedEvent.date} by: {selectedEvent.host}</h4>
          <RSVPForm selectedEvent={selectedEvent}/> {/* take an id as well to insert response into correct event? */}
          
          <Results yescount={dbSelectedEvent.yes} maybecount={dbSelectedEvent.maybe} nocount={dbSelectedEvent.no}/>
          
          <button onClick={() => props.handleBackToMainPage('MainPage')}>MainPage</button>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

EventDetails.propTypes = {
  handleBackToMainPage: PropTypes.func,
  selectedEvent: PropTypes.object
}


export default EventDetails;