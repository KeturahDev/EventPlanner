import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryTheme} from 'victory';
import style from 'styled-components'

const DataBox = style.div `
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Graph = style.div `
  border-radius: 9px;
  border: 2px solid grey;
  margin: 10px;
  background-color: rgba(253, 255, 253, 0.886);
`;
  
const Answers = style.div `

  margin: 10px;

`;

function Results(props){

  const dataArr = [ 
    {status: "yes", votes: props.yescount},
    {status: "maybe", votes: props.maybecount},
    {status: "no", votes: props.nocount} 
  ]

  return(
    <React.Fragment>
      <DataBox>
        <Graph>
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
        </Graph>
        <Answers>
          <p>Going: {props.yescount}</p>
          <p>Might be going: {props.maybecount}</p>
          <p>Not going: {props.nocount}</p>
        </Answers>
      </DataBox>
      
    </React.Fragment>
  );
}

Results.propTypes = {
  yescount: PropTypes.number,
  maybecount: PropTypes.number,
  nocount: PropTypes.number
}

export default Results;