import React from "react";
import PropTypes from "prop-types";

function Event(props) { //button id = prop?

  return (
    <React.Fragment>
      <div onClick={() => {
          props.handleChangeViewClick("EventDetails");
          props.handleSelectEvent({
            title: props.title, 
            host: props.host, 
            date: props.date,
            yes: props.yes,
            maybe: props.maybe,
            no: props.no,
            id: props.id
          });
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