import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import styled from 'styled-components';

const FormBubble = styled.div `
  border: 2px solid grey;
  border-radius: 9px;
  padding: 3px;
  ${'' /* padding-left: 7%; */}
  padding-bottom: 3%;
  background-color: #909f86a7;
  text-align: center;
`;

function NewEventForm(props) {
  const firestore = useFirestore();

  function addEventToFirestore(defaultEvent) {
    defaultEvent.preventDefault();
    props.handleBackToMainPage('MainPage');
    return firestore.collection('events').add({
      title: defaultEvent.target.title.value,
      host: defaultEvent.target.host.value,
      date: defaultEvent.target.date.value,
      yes: 0,
      maybe: 0,
      no:0
    });
  }

  return(
    <React.Fragment>
    <FormBubble>
      <h2>New Event Form</h2>
      <form className="centerBox" onSubmit={addEventToFirestore}>
        <input 
          type='text'
          name='title'
          placeholder='Event Title' />
        <input 
          type='text'
          name='host'
          placeholder='Event Host' />
        <input 
          type='text'
          name='date'
          placeholder='Event Date' />
        <button className="button" type="submit">Submit</button>
      </form>
      <div className="centerBox" >
        <button className="button" onClick={() => props.handleBackToMainPage('MainPage')}>Back to Events</button>
      </div>
      </FormBubble>
    </React.Fragment>
  )
}

NewEventForm.propTypes = {
  handleBackToMainPage: PropTypes.func
}
export default NewEventForm;