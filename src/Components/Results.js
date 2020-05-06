import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart } from 'victory';

function Results(props){

  const [data, notSure] = useState({ fill: "tomato" })
  const [clicked, clickClack] = useState(false)

  const dataArr = [ 
    {status: "yes", votes: props.yescount},
    {status: "maybe", votes: props.maybecount},
    {status: "no", votes: props.nocount} 
  ]

  return(
    <React.Fragment>
      <div style={{border: "2px solid blue"}}>
        <p>throw graph/data analytics here</p>
        {/* {graph} */}
        {props.yescount}
        {props.maybecount}
        {props.nocount}
      </div>
      <VictoryChart>
        <VictoryBar 
          data={dataArr}
          // data accessor for x values
          x="status"
          // data accessor for y values
          y="votes"
          />
      </VictoryChart>
    </React.Fragment>
  );
}

export default Results;