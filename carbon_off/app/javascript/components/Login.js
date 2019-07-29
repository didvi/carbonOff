import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login page
        <h1>Carbon Off</h1>
        <Link to='./about'>What is Carbon Off?</Link>
        <br/>
        <Input></Input>
        <Input></Input>
        <Button onClick={() => this.props.changePage(1)}>Login</Button>
      </div>
    )
  }
}

export default Login