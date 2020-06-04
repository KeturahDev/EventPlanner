import React from 'react';
import Event from './Event';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import style from "styled-components";


const EventStyles = style.div `
  border: 2px solid grey;
  border-radius: 9px;
  background-color: #909f86a7;
`;

function EventList(props) {

  useFirestoreConnect([{ collection: 'events' }]);

  const events = useSelector(state => state.firestore.ordered.events);

  if (isLoaded(events)) {
    return (
      <React.Fragment>
        <div style={{ border: "2px solid purple" }}>
          <p>here's a list of events</p>
          {events.map((event, index) =>
            <EventStyles
              key={event.id}
            >
              <Event
                title={event.title}
                host={event.host}
                date={event.date}
                yes={event.yes}
                maybe={event.maybe}
                no={event.no}
                id={event.id}
                handleChangeViewClick={props.handleChangeViewClick}
                handleSelectEvent={props.handleSelectEvent}
              />
            </EventStyles>
          )}
        </div>
      </React.Fragment>
    );
  } else {
    return (<h3>Loading...</h3>);
  }
}

export default EventList;