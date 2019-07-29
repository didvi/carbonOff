import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Button, Slider } from 'antd';

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      offsetAmount: 0 
    }
    this.updateOffsetAmount = this.updateOffsetAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateOffsetAmount(v) {
    this.setState({offsetAmount: v})
  }

  handleSubmit() {
    this.props.offsetAmount(this.state.offsetAmount);
    this.props.changePage(4);
  }

  render() {
    return (
      <div>
        <h1>Pay Now</h1>
        <p>Your carbon footprint is {this.props.currentEmissions} 
             which is worth lots of money</p>
        
        <h3>How much would you like pay?</h3>
        <Slider onChange={this.updateOffsetAmount}></Slider>
        <Button onClick={() => this.props.changePage(2)} type="ghost">Cancel</Button>
        <Button onClick={this.handleSubmit} type="primary">Pay Now</Button>
      </div>
    )
  }
}

Payment.PropTypes = {
  currentEmissions: PropTypes.number, 
  changePage: PropTypes.func,
  offsetAmount: PropTypes.func,
}

export default Payment