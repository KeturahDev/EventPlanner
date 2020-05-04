import React from 'react';
import EventList from './EventList';
import NewEventForm from './NewEventForm';
import EventDetails from './EventDetails'; 

const MainPage = props => {
  return (
    <React.Fragment>
      <button onClick={console.log('clicked')}>Add New Event</button>
      <EventList />
    </React.Fragment>
  )
}

export default MainPage;