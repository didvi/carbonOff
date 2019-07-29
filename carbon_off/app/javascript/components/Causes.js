import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Causes extends React.Component {
    constructor() {
      super();
      this.state = {
        cause: "" 
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
        console.log("cause chosen", e)
        this.props.chooseCause(e.value);
        this.props.changePage(3)
    }
  
    render() {
      return (
        <div>
            causes
            <div>
                <h1>Cause #1</h1>
                <p>Blurb About Cause</p>
                <Button onClick={this.handleSubmit} type='primary'>Select</Button>
            </div>
            <div>
                <h1>Cause #1</h1>
                <p>Blurb About Cause</p>
                <Button onClick={this.handleSubmit} type='primary'>Select</Button>
            </div>
            <div>
                <h1>Cause #1</h1>
                <p>Blurb About Cause</p>
                <Button onClick={this.handleSubmit} type='primary'>Select</Button>
            </div>
            <Button onClick={() => this.props.changePage(1)} type="ghost">Go Back</Button>
        </div>
      )
    }
  }
  
  Causes.PropTypes = {
    chooseCause: PropTypes.func, 
    changePage: PropTypes.func,
  };
  
  export default Causes