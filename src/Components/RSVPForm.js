import React from "react";
// import PropTypes from "prop-types";

function RsvpForm(props) {
  return (
    <React.Fragment>
      <button onClick={console.log('clicked yes')}>Yes</button>
      <button onClick={console.log('clicked no')}>No</button>
      <button onClick={console.log('clicked maybe')}>Maybe So</button>
    </React.Fragment>
  );
}

export default RsvpForm;

