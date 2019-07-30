import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Button, InputNumber } from 'antd';

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
      <div id='payment'>
        <h1>Pay Now</h1>
        <p>Your carbon footprint is {this.props.emissions}  
             which is worth lots of money</p>
        
        <h3>How much would you like pay?</h3>
        <InputNumber onChange={this.updateOffsetAmount}></InputNumber>
        
        <div>
          <Button className='button' size='large' onClick={() => this.props.changePage(2)} type="ghost">Cancel</Button>
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