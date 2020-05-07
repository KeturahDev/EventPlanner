import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryTheme} from 'victory';

function Results(props){

  const dataArr = [ 
    {status: "yes", votes: props.yescount},
    {status: "maybe", votes: props.maybecount},
    {status: "no", votes: props.nocount} 
  ]

  return(
    <React.Fragment>
      <div style={{border: "2px solid blue"}}>
        <div className={"data"}>
          <VictoryChart 
          theme={VictoryTheme.material}
          domainPadding={20}>
            <VictoryBar 
              data={dataArr}
              style={{data: {fill: "pink"}}}
              x="status"
              y="votes"
              />
          </VictoryChart>
        </div>
      
        <p>Going: {props.yescount}</p>
        <p>Might be going: {props.maybecount}</p>
        <p>Not going: {props.nocount}</p>
      </div>
      
    </React.Fragment>
  );
}

Results.propTypes = {
  yescount: PropTypes.number,
  maybecount: PropTypes.number,
  nocount: PropTypes.number
}

export default Results;