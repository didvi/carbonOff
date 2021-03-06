import React from 'react'
import Login from './Login';
import Profile from './Profile';
import DetailedQuestions from './DetailedQuestions';
import Causes from './Causes';
import { Steps, Icon } from 'antd';
import Payment from './Payment';

const { Step } = Steps;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pageNumber: 3, 
      emissions: 500,
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
        return (<DetailedQuestions updateEmissions={this.updateEmissions} changePage={this.changePage}></DetailedQuestions>)
      case 1:
        return (<Profile emissions={this.state.emissions} changePage={this.changePage}></Profile>)
      case 2:
        return (<Causes chooseCause={this.chooseCause} changePage={this.changePage}></Causes>)
      case 3:
        return (<Payment offsetAmount={this.offsetAmount} 
                         changePage={this.changePage} 
                         emissions={this.state.emissions}></Payment>)
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

  getBackground() {
    return "background" + this.state.pageNumber;
  }

  render() {
    return (
      <div id="app" className={this.getBackground()}>
        <div id="navbar">
          <title>Carbon Off</title>
          <Steps>
            <Step status={this.pageStatus(0)} title="Calculate Emissions" icon={<Icon type="user" />} />
            <Step status={this.pageStatus(1)} title="View Emissions" icon={<Icon type="solution" />} />
            <Step status={this.pageStatus(2)} title="Choose a Cause" icon={<Icon type="project" />} />
            <Step status={this.pageStatus(3)} title="Offset Your Carbon" icon={<Icon type="smile-o" />} />
          </Steps> 
        </div>
        <div className='background'></div>
        {this.getPage()}
      </div>
    )
  }
}

export default App