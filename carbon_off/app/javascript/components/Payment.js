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
        <p>5% of your payment will go towards improving our company and expanding our reach in the market.
          The better we do as a company, the better the environment does as well. <a style={{"color": "grey"}}>Learn More...</a>
        </p>
        <h3>Your monthly mobility footprint: </h3>
        <h2><span>{emissions}kg of CO2</span></h2>
        <h3>Cost to offset this month's mobility footprint:</h3>
        <h2><span>${emissionsCost}</span></h2>
        <div className='payment-input'>
          <h3>Enter Your Payment Amount</h3>
          <InputNumber size='large' onChange={this.updateOffsetAmount} defaultValue={emissionsCost}></InputNumber>
           USD
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