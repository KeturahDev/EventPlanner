import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'


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
      <h3>New Event Form</h3>
      <form onSubmit={addEventToFirestore}>
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
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => props.handleBackToMainPage('MainPage')}>Back to Events</button>
    </React.Fragment>
  )
}

NewEventForm.propTypes = {
  handleBackToMainPage: PropTypes.func
}
export default NewEventForm;