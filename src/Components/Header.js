import React from "react";
import { Link } from "react-router-dom";


function Header(props){
  return (
    <React.Fragment>
      <h1>Event Planner</h1>
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