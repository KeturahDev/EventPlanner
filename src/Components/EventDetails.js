import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";
import PropTypes from 'prop-types';

function EventDetails(props) { //button id = prop?
  const {selectedEvent} = props;

  console.log('selectedEvent: ' + selectedEvent);
  return (
    <React.Fragment>
      <div style={{ border: "2px solid orange" }}>
        <h3>{selectedEvent.title}</h3>
        <h4>On {selectedEvent.date} by: {selectedEvent.host}</h4>
        <RSVPForm selectedEvent={selectedEvent}/> {/* take an id as well to insert response into correct event? */}
        
        <Results yescount={selectedEvent.yes} maybecount={selectedEvent.maybe} nocount={selectedEvent.no}/>
        
        <button onClick={() => props.handleBackToMainPage('MainPage')}>MainPage</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

EventDetails.propTypes = {
  handleBackToMainPage: PropTypes.func,
  selectedEvent: PropTypes.object
}


export default EventDetails;