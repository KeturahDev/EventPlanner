import React from 'react';
import Event from './Event';

function EventList() {
    return (
        <React.Fragment>
        <div style={{border: "2px solid purple"}}>
            <p>here's a list of events</p>
            <Event />{/* //pass in button id? */}
        </div>
        </React.Fragment>
    );
}

export default EventList;