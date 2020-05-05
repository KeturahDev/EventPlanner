import React from 'react';
import Event from './Event';
import Events from "./../Data/Events";


function EventList(props) {
    return (
        <React.Fragment>
        <div style={{border: "2px solid purple"}}>
            <p>here's a list of events</p>
             {Object.values(Events).map((event, index) => 
              <Event 
                title={event.title}
                host={event.host}
                date={event.date} 
                handleChangeViewClick={props.handleChangeViewClick}
                handleSelectEvent={props.handleSelectEvent}
                key={index}
               />
             )}
        </div>
        </React.Fragment>
    );
}

export default EventList;