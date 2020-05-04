import React from "react";
import PropTypes from "prop-types";

function NewEventForm(props) {
  return(
    <React.Fragment>
      <h3>New Event Form</h3>
      <form onSubmit={console.log("newEvent")}>
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