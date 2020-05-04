import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";
import PropTypes from 'prop-types';

function EventDetails(props) { //button id = prop?
  const {selectedEvent} = props;
  return (
    <React.Fragment>
      <div style={{ border: "2px solid orange" }}>
        <h3>{selectedEvent.title}</h3>
        <h4>On {selectedEvent.date} by: {selectedEvent.host}</h4>
        <RSVPForm /> {/* take an id as well to insert response into correct event? */}
        <Results />
        {/* <Results id={props.id}/> */}
        <button onClick={() => props.handleBackToMainPage('MainPage')}>MainPage</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

EventDetails.propTypes = {
  handleBackToMainPage: PropTypes.func,
  selectedEvent: PropTypes.object,
}


export default EventDetails;