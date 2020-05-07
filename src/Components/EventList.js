import React from 'react';
import Event from './Event';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded} from 'react-redux-firebase'


function EventList(props) {

  useFirestoreConnect([{ collection: 'events' }]);

  const events = useSelector(state => state.firestore.ordered.events);
  
    if(isLoaded(events)) {
        return (
            <React.Fragment>
            <div style={{ border: "2px solid purple" }}>
                <p>here's a list of events</p>
                {events.map((event, index) =>
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
                    key={event.id}
                />
                )}
            </div>
            </React.Fragment>
        );      
    } else {
        return(<h3>Loading...</h3>);
    }
}

export default EventList;