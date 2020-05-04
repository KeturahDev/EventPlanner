import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";

function Event(props) { //button id = prop?
  const exampleEvent = "event";
  return (
    <React.Fragment>
      <div style={{ border: "2px solid orange" }}>
        <h3>EventTitle</h3>
        <h4>{exampleEvent}</h4>
        <RSVPForm /> {/* take an id as well to insert response into correct event? */}
        <Results />
        {/* <Results id={props.id}/> */}
        <hr />
      </div>
    </React.Fragment>
  );
}


export default Event;