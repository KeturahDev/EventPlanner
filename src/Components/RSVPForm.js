import React from "react";
import { useFirestore } from 'react-redux-firebase';
import style from 'styled-components'

const ButtonBox = style.div `
  padding: 5px;
  
`;

function RsvpForm(props) {
  const firestore = useFirestore();
   console.log("IN DETAILS",props.selectedEvent);
   function handleVoteClick(col) {
     if(col === "yes") {
       console.log("IN FUNCTION",props.selectedEvent.id);
       return firestore.update({collection: 'events', doc: props.id }, {yes: props.selectedEvent.yes+1})
    } else if (col === "maybe") {
      return firestore.update({collection: 'events', doc: props.id }, {maybe: props.selectedEvent.maybe+1})
    } else if (col === "no") {
      return firestore.update({collection: 'events', doc: props.id }, {no: props.selectedEvent.no+1})
    }
  }

  return (
    <ButtonBox>
      <button className="buttonVote" onClick={() => handleVoteClick("yes")}>Yes</button>
      <button className="buttonVote" onClick={() => handleVoteClick("maybe")}>Maybe</button>
      <button className="buttonVote" onClick={() => handleVoteClick("no")}>No</button>
    </ButtonBox>
  );
}

export default RsvpForm;

