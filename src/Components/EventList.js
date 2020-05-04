import React from 'react';
import Event from './Event';

function EventList(props) {
    return (
        <React.Fragment>
        <div style={{border: "2px solid purple"}}>
            <p>here's a list of events</p>
            <Event handleChangeViewClick={props.handleChangeViewClick} />{/* //pass in button id? */}
        </div>
        </React.Fragment>
    );
}

export default EventList;