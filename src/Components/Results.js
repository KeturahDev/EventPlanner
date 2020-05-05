import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Results(props){

  // form - takes button info...



  return(
    <React.Fragment>
      <div style={{border: "2px solid blue"}}>
        <p>throw graph/data analytics here</p>
        {props.yescount}
        {props.maybecount}
        {props.no}
      </div>
    </React.Fragment>
  );
}

export default Results;