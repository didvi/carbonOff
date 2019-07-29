import React from 'react'
import PropTypes from 'prop-types';
import { Slider, Button } from 'antd';
import 'antd/dist/antd.css';
import { calculateCarbon } from '../util/helpers.js';
import { DatePicker } from 'antd';

const { MonthPicker } = DatePicker;

class Questionnaire extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      fly_hours: 0,
      car_hours: 0,
      month: 0 
    }
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handlePlaneChange = this.handlePlaneChange.bind(this);
    this.handleCarChange = this.handleCarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMonthChange(value) {
    console.log("month", value.month());
    this.setState({month: value})
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
    this.props.updateEmissions(carbon, this.state.month);
    this.props.changePage(1);
  }

  render() {
    return (
      <form>
        <h2>Enter a month.</h2>
          <MonthPicker onChange={this.handleMonthChange}></MonthPicker>
        <h2>How many hours did you fly this month?</h2>
            <Slider onChange={this.handlePlaneChange} defaultValue={0}/>
        <h2>How much did you drive this month?</h2>
          <Slider onChange={this.handleCarChange} defaultValue={0}/>
        <Button type="primary" onClick={this.handleSubmit}>Offset Now</Button>
      </form>
    )
  }
}

Questionnaire.propTypes = {
  updateProfile: PropTypes.func,
  updateEmissions: PropTypes.func
};

export default Questionnaire