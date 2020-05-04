import React from "react";
// import PropTypes from "prop-types";

function NewEventForm() {
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
      </form>
    </React.Fragment>
  )
}

export default NewEventForm;