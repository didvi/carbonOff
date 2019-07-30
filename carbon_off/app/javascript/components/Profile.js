import React from 'react';
import Footprint from './Footprint';
import 'antd/dist/antd.css';
import { Button } from 'antd';

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

  render() {
    return (
      <div id="profile">
        <Footprint carbonData={carbonData} emissions={this.props.emissions}></Footprint>

        <Button className='button' size='large' onClick={() => this.props.changePage(0)}>Enter Data</Button>
        <Button className='button' size='large' type="primary" onClick={() => this.props.changePage(2)}>Offset Now</Button>
      </div>
    )
  }
}

export default Profile