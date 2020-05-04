import React from 'react';
import EventList from './EventList';
import NewEventForm from './NewEventForm';
import EventDetails from './EventDetails'; 
import PropTypes from 'prop-types'

const MainPage = props => {
  return (
    <React.Fragment>
      <button onClick={() => props.handleAddEventClick('NewEventForm')}>Add New Event</button>
      <EventList />
    </React.Fragment>
  )
}
MainPage.propTypes = {
  handleAddEventClick: PropTypes.func
}
export default MainPage;