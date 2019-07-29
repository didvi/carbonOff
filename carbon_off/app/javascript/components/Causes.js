import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Causes extends React.Component {
    constructor() {
      super();
      this.state = {
        cause: "" 
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
        console.log("cause chosen", e)
        this.props.chooseCause(e.value);
        this.props.changePage(3)
    }
  
    render() {
      return (
        <div id='causes'>
            <div>
                <h1><a>BioCarbon Engineering</a></h1>
                <p>BioCarbon Engineering, a start up based in Oxford, designed the drones
                  to fire seed missiles across fields, planting hundreds of potential trees
                  in a matter of minutes.
                </p>
                <Button onClick={this.handleSubmit} type='primary'>Select</Button>
            </div>
            <div>
                <h1><a>Egain</a></h1>
                <p>Technology company that links intelligent software, big data, and human
                  experience to provide self-optimized and energy efficient buildings.
                </p>
                <Button onClick={this.handleSubmit} type='primary'>Select</Button>
            </div>
            <div>
                <h1><a>Mobisol Smart Solar Homes</a></h1>
                <p>This ICT-enabled solution combines solar energy, mobile technology and microfinance
                  to bring clean power to rural households in Rawanda and Tanzania.
                </p>
                <Button onClick={this.handleSubmit} type='primary'>Select</Button>
            </div>
            <Button onClick={() => this.props.changePage(1)} type="ghost">Go Back</Button>
        </div>
      )
    }
  }
  
  Causes.PropTypes = {
    chooseCause: PropTypes.func, 
    changePage: PropTypes.func,
  };
  
  export default Causes