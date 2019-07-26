import React from 'react';
import Footprint from './Footprint';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Steps, Icon } from 'antd';

const { Step } = Steps;

const carbonData = [
  {month: 1, before: 20, after: 3},
  {month: 2, before: 10, after: 10},
  {month: 3, before: 16, after: 7},
  {month: 4, before: 25, after: 1},
  {month: 5, before: 18, after: 5},  
]

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      fly_hours: 0,
      car_hours: 0,
      carbon: 0
    }
  }


  calculateCarbon() {
    let carbon;
    carbon = this.state.fly_hours * 10;
    carbon += this.state.car_hours;
    return carbon;
  }

  render() {
    return (
      <div>
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step status="finish" title="Calculate Emissions" icon={<Icon type="solution" />} />
          <Step status="process" title="Pay" icon={<Icon type="money-collect" />} />
          <Step status="wait" title="Feel Great" icon={<Icon type="smile-o" />} />
        </Steps>
        
        <Footprint carbonData={carbonData}></Footprint>

        <Button type="primary">Offset Now</Button>
        <Link to='./questionnaire'><Button>Enter Data</Button>
        </Link>
      </div>
    )
  }
}

export default Profile