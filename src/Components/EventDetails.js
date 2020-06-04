import React from "react";
import RSVPForm from "./RSVPForm";
import Results from "./Results";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import style from 'styled-components'

const DetailBox = style.div `
  border: 2px solid grey;
  border-radius: 9px;
  background-color: #909f86a7;
  padding-left: 6px;
  margin-top: 6px;
`;

const CenterContent = style.div `
  padding: 6px;
  display: flex;
  justify-content: center;
`;
function EventDetails(props) { 
  const {selectedEvent} = props;

  useFirestoreConnect([{ collection: 'events', doc: selectedEvent.id }]);

  const dbSelectedEvent = useSelector(({ firestore: { data } }) => data.events && data.events[selectedEvent.id]);

  if(isLoaded(dbSelectedEvent)) {
    console.log("DB SELECTED:",dbSelectedEvent);
    return (
      <React.Fragment>
        <DetailBox>
          <h3>{selectedEvent.title}</h3>
          <h4>On {dbSelectedEvent.date} by: {selectedEvent.host}</h4>
          <CenterContent>
            <RSVPForm selectedEvent={dbSelectedEvent} id={selectedEvent.id}/>
          </CenterContent>
          
          <hr/>
          <Results yescount={dbSelectedEvent.yes} maybecount={dbSelectedEvent.maybe} nocount={dbSelectedEvent.no}/>
          <hr/>
          <CenterContent>
            <button className="button" onClick={() => props.handleBackToMainPage('MainPage')}>MainPage</button>
          </CenterContent>
        </DetailBox>
      </React.Fragment>
    );
  }
}

EventDetails.propTypes = {
  handleBackToMainPage: PropTypes.func,
  selectedEvent: PropTypes.object
}


export default EventDetails;