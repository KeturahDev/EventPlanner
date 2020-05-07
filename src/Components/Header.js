import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const EventPlannerHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #b5f587;
  background-image: linear-gradient(to bottom, #b3f484, #83b462, #567842, #2e4124, #060f00);
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  margin:0%
`;

function Header(props){
  return (
    <React.Fragment>
      <EventPlannerHeader>
          Event Planner
      </EventPlannerHeader>
      {/* <h1>Event Planner</h1> */}
      <ul>
        <li onClick={props.handleClickLink}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={props.handleClickLink}>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;