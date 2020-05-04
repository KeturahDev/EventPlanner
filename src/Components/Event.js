import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";
import PropTypes from "prop-types";

function Event(props) { //button id = prop?
  const exampleEvent = "event";
  return (
    <React.Fragment>
      <div onClick={() => {
          props.handleChangeViewClick("EventDetails")
          props.handleSelectEvent({title: props.title, host: props.host, date: props.date})
        }} 
        style={{ border: "2px solid pink" }}>
        <h3>{props.title}</h3> 
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  handleChangeViewClick: PropTypes.func,
  handleSelectEvent: PropTypes.func
}

export default Event;