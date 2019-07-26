import React from 'react'
import PropTypes from 'prop-types';
import * as V from 'victory';
import 'antd/dist/antd.css';

class Footprint extends React.Component {
 
  render() {
    let data = this.props.carbonData;
    return (
      <div>
        <h1>Your Footprint</h1>
        <p>The average footprint in your country 
          is around 10 tonns of CO2. Your footprint 
          is above average. Let´s reduce it together!</p>
          <div style={{"width":"500px", "height":"500px"}}>
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