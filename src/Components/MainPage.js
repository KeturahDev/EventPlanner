import React from 'react';
import EventList from './EventList';
import PropTypes from 'prop-types'


const MainPage = props => {
  return (
    <React.Fragment>
      <button className="button" onClick={() => props.handleChangeViewClick('NewEventForm')}>Add New Event</button>
      <EventList handleChangeViewClick={props.handleChangeViewClick} handleSelectEvent={props.handleSelectEvent} />
    </React.Fragment>
  )
}
MainPage.propTypes = {
  handleChangeViewClick: PropTypes.func
}
export default MainPage;