import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Button, InputNumber } from 'antd';
import { calculateCarbonCost } from '../util/helpers.js';
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
    let emissions =  this.props.emissions;
    let emissionsCost = calculateCarbonCost(emissions);
    // let stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    // let elements = stripe.elements();

    return (
      <div id='payment'>
        <h1>Offset Your Carbon Now!</h1>
        <h2>Your monthly mobility footprint: <span>{emissions}kg of CO2</span></h2>
        <h2>Cost to offset this month's mobility footprint: <span>€{emissionsCost}</span></h2>
        <div className='payment-input'>
          <h3>Enter Your Monthly Payment Amount</h3>
          <InputNumber size='large' onChange={this.updateOffsetAmount} defaultValue={emissionsCost}></InputNumber>
        </div>
        
        <div>
          <Button className='button' size='large' onClick={() => this.props.changePage(2)} type="default">Cancel</Button>
          <Button className='button' size='large' onClick={this.handleSubmit} type="primary">Pay Now</Button>
        </div>

      </div>
    )
  }
}

Payment.PropTypes = {
  emissions: PropTypes.number, 
  changePage: PropTypes.func,
  offsetAmount: PropTypes.func,
}

export default Payment