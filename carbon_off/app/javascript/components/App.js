import React from 'react'
import Login from './Login';
import Profile from './Profile';
import Questionnaire from './Questionnaire';
import Causes from './Causes';
import { Steps, Icon } from 'antd';
import Payment from './Payment';

const { Step } = Steps;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pageNumber: 2, 
      currentEmissions: 500,
      cause: "",
    }
    this.changePage = this.changePage.bind(this);
    this.updateEmissions = this.updateEmissions.bind(this);
    this.chooseCause = this.chooseCause.bind(this);
  }

  chooseCause(c) {
    this.setState(() => {return {cause: c}})
  }

  changePage(x) {
    this.setState(() => {return {pageNumber: x}})
  }
  
  updateEmissions(x) {
    this.setState(() => {return {emissions: x}})
  }

  getPage() {
    switch (this.state.pageNumber) {
      case 0:
        return (<Questionnaire updateEmissions={this.updateEmissions} changePage={this.changePage}></Questionnaire>)
      case 1:
        return (<Profile currentEmissions={this.state.currentEmissions} changePage={this.changePage}></Profile>)
      case 2:
        return (<Causes chooseCause={this.chooseCause} changePage={this.changePage}></Causes>)
      case 3:
        return (<Payment offsetAmount={this.offsetAmount} 
                         changePage={this.changePage} 
                         currentEmissions={this.state.currentEmissions}></Payment>)
      default:
        return (<Login changePage={this.changePage}></Login>)
    }

  }

  pageStatus(p) {
    if (this.state.pageNumber === p) {
      return "process"
    } else if (this.state.pageNumber < p) {
      return "wait"
    } else {
      return "finish"
    }
  }

  render() {
    return (
      <div id="app">
        <div id="navbar">
          <Steps>
            <Step status={this.pageStatus(0)} title="Calculate Emissions" icon={<Icon type="user" />} />
            <Step status={this.pageStatus(1)} title="View Emissions" icon={<Icon type="solution" />} />
            <Step status={this.pageStatus(2)} title="Choose a Cause" icon={<Icon type="money-collect" />} />
            <Step status={this.pageStatus(3)} title="Offset Your Carbon" icon={<Icon type="smile-o" />} />
          </Steps> 
        </div>

        {this.getPage()}
      </div>
    )
  }
}

export default App