import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const EventPlannerHeader = styled.h1`
  font-size: 50px;
  ${'' /* text-align: center; */}
  color: #b5f587;
  ${'' /* background-image: linear-gradient(to bottom, #b3f484, #83b462, #567842, #2e4124, #060f00); */}
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  margin:0%
`;

const notALink = {
  textDecoration: "none",
  color: "#b5f587",
  fontSize: "25px",
  backgroundColor: "#030c0185",
  borderRadius: "9px",
  padding: "5px"
}

function Header(props){
  return (
    <React.Fragment>
      <ul className="centerBox" >
      <EventPlannerHeader className="blocks" >
          Event Planner
      </EventPlannerHeader>
      <div className="linkBox">
        <li className="blocks" onClick={props.handleClickLink}>
          <Link style={notALink} to="/">Home</Link>
        </li>
        <li className="blocks" onClick={props.handleClickLink}>
          <Link style={notALink} to="/signin">Sign In</Link>
        </li>
      </div>
      </ul>
    </React.Fragment>
  );
}

export default Header;