import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login page
        <h1>Carbon Off</h1>
        <Link to='./about'>What is Carbon Off?</Link>
        <br/>
        <input></input>
        <input></input>
        <Link to='./profile'>Login</Link>
      </div>
    )
  }
}

export default Login