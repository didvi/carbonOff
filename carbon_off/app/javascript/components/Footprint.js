import React from 'react'
import PropTypes from 'prop-types';
import * as V from 'victory';
import 'antd/dist/antd.css';
import { Progress } from 'antd';

const averageFootprint = 100;

class Footprint extends React.Component {

  render() {
    let data = this.props.carbonData;
    let currentEmissions = [
      {"x": "before offset", "carbon": this.props.currentEmissions},
      {"x": "current emissions", "carbon": 800},  
    ]

    return (
      <div>
        <h1>Your Footprint</h1>
        <p>The average footprint in your country 
          is around 10 tonns of CO2. Your footprint 
          is above average. Let´s reduce it together!</p>
          <div style={{"width":"500px", "height":"500px"}}>
            <h3>Current Footprint: {this.props.currentEmissions}kg of CO2</h3>
            <Progress percent={this.props.currentEmissions / 10} status="exception" />
            <h3>Average Footprint: {averageFootprint}kg of CO2</h3>
            <Progress percent={10} />

            <V.VictoryBar data={currentEmissions} 
                          x="x"
                          y="carbon"
                          labels={["current footprint", "average footprint"]}
            ></V.VictoryBar>


            <h3>Emissions History</h3>
            <V.VictoryChart scale={{ x: "month" }} width={400} height={400}>
            <V.VictoryStack colorScale="warm">
              <V.VictoryGroup
                data={data}
                interpolation="natural"
                // data accessor for x values
                x="month"
                // data accessor for y values
                y="before"
              >
                <V.VictoryArea/>
                <V.VictoryPortal>
                  <V.VictoryScatter
                    style={{ data: { fill: "black" } }}
                  />
                </V.VictoryPortal>
              </V.VictoryGroup>
              <V.VictoryGroup
                data={data}
                interpolation="natural"
                // data accessor for x values
                x="month"
                // data accessor for y values
                y="after"
              >
                <V.VictoryArea/>
                <V.VictoryPortal>
                  <V.VictoryScatter
                    style={{ data: { fill: "black" } }}
                  />
                </V.VictoryPortal>
              </V.VictoryGroup>
            </V.VictoryStack>
          </V.VictoryChart>
          </div>
      </div>
    )
  }
}

Footprint.propTypes = {
  carbonData: PropTypes.array,
};

export default Footprint