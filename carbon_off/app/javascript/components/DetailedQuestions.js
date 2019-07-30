import React from 'react'
import PropTypes from 'prop-types';
import { Slider, Button } from 'antd';
import 'antd/dist/antd.css';
import { calculateCarbon } from '../util/helpers.js';
import { DatePicker } from 'antd';
const { MonthPicker } = DatePicker;

class DetailedQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      fly_hours: 0,
      car_hours: 0,
    }
    this.handlePlaneChange = this.handlePlaneChange.bind(this);
    this.handleCarChange = this.handleCarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlaneChange(value) {
    this.setState({fly_hours: value});
  }

  handlePlaneChange(value) {
    this.setState({fly_hours: value});
  }

  handleCarChange(value) {
    this.setState({car_hours: value});
  }

  handleSubmit() {
    let carbon = calculateCarbon("car", this.state.car_hours);
    carbon += calculateCarbon("plane", this.state.fly_hours);
    console.log("carbon", carbon);
    this.props.updateEmissions(carbon);
    this.props.changePage(1);
  }

  render() {
    return (
      <div className='questionnaire'>
        <div>   
          <h2>How many hours did you fly this month?</h2>
          {/* <p>The average person flys __ hours a month.</p> */}
              <Slider onChange={this.handlePlaneChange} defaultValue={0}/> 
              <h3>{this.state.fly_hours} hours</h3>
        </div>
        <div>
          <h2>How many hours did you drive this month?</h2>
          {/* <p>The average person drives __ hours a month.</p> */}
            <Slider onChange={this.handleCarChange} defaultValue={0}/>
            <h3>{this.state.car_hours} hours</h3>
        </div>
        <Button size='large' type="primary" onClick={this.handleSubmit}>Offset Now</Button>
      </div>
    )
  }
}

DetailedQuestions.propTypes = {
  updateProfile: PropTypes.func,
  updateEmissions: PropTypes.func, 
  changePage: PropTypes.func,
};

export default DetailedQuestions