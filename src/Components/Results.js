import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart , VictoryAxis, VictoryTheme } from 'victory';

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
      <VictoryChart 
      theme={VictoryTheme.material}
      domainPadding={20}>
        <VictoryBar 
          data={dataArr}
          style={{data: {fill: ({x}) => 
            x === "yes" ? "green" : 'pink'
          }}}
          // data accessor for x values
          x="status"
          // data accessor for y values
          y="votes"
          />
      </VictoryChart>
        <p>Going: {props.yescount}</p>
        <p>Might be going: {props.maybecount}</p>
        <p>Not going: {props.nocount}</p>
      </div>
      
    </React.Fragment>
  );
}

export default Results;