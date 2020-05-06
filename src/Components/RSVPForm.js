import React from "react";
import { useFirestore } from 'react-redux-firebase';
// import PropTypes from "prop-types";

function RsvpForm(props) {
  const firestore = useFirestore();
   console.log("IN DETAILS",props.selectedEvent);
   function handleVoteClick(col) {
     if(col === "yes") {
       console.log("IN FUNCTION",props.selectedEvent.id);
       return firestore.update({collection: 'events', doc: props.selectedEvent.id }, {title: "yes"})
    } else if (col === "maybe") {
      return firestore.update({collection: 'events', doc: props.selectedEvent.id }, {maybe: props.selectedEvent.maybe+1})
    } else if (col === "no") {
      return firestore.update({collection: 'events', doc: props.selectedEvent.id }, {no: props.selectedEvent.no+1})
    }
  }

  return (
    <React.Fragment>
      <button onClick={() => handleVoteClick("yes")}>Yes</button>
      <button onClick={() => handleVoteClick("no")}>No</button>
      <button onClick={() => handleVoteClick("maybe")}>Maybe So</button>
    </React.Fragment>
  );
}

export default RsvpForm;

// const propertiesToUpdate = {
//   names: event.target.names.value,
//   location: event.target.location.value,
//   issue: event.target.issue.value,
//   yes: event.target.yes.value ++
// }
// ({collection: 'events', doc: yes: event.yes}, properties)
// return firestore.update({collection: 'tickets', doc: ticket.id }, propertiesToUpdate)