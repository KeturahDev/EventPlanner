import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";
import PropTypes from 'prop-types';

function EventDetails(props) { //button id = prop?
  const exampleEvent = "event";
  return (
    <React.Fragment>
      <div style={{ border: "2px solid orange" }}>
        <h3>EventTitle</h3>
        <h4>{exampleEvent}</h4>
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
  handleBackToMainPage: PropTypes.func
}


export default EventDetails;