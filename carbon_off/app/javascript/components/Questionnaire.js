import React from 'react'
import PropTypes from 'prop-types';
import { Slider, Button } from 'antd';
import 'antd/dist/antd.css';
import { calculateCarbon } from '../util/helpers.js';
import { DatePicker } from 'antd';
import SimpleQuestions from './SimpleQuestions.js';
import DetailedQuestions from './DetailedQuestions.js';

const { MonthPicker } = DatePicker;

class Questionnaire extends React.Component {
  constructor() {
    super();
    this.state = {
      questionnaireType: "" 
    }
  }

  chooseQuestionnaire(x) {
    if (x === 0) {
      this.setState({questionnaireType: "simple"})
    } else {
      this.setState({questionnaireType: "detailed"})
    }
  }
  
  getQuestionnaire() {
    let updateEmissions = this.props.updateEmissions;
    let updateProfile = this.props.updateProfile;
    let changePage = this.props.changePage;

    if (this.state.questionnaireType === "simple") {
      return (<SimpleQuestions updateEmissions={updateEmissions} 
                               changePage={changePage}
                               updateProfile={updateProfile}></SimpleQuestions>)
    } else if (this.state.questionnaireType === "detailed") {
      return (<DetailedQuestions updateEmissions={updateEmissions} 
                               changePage={changePage}
                               updateProfile={updateProfile}></DetailedQuestions>)
    } else {
      return (<div id="question-options">
              <Button onClick={() => this.chooseQuestionnaire(0)}>Calculate Footprint based on location</Button>
              <Button onClick={() => this.chooseQuestionnaire(1)}>Calculate Footprint based on my answers</Button></div>)
    }
  }

  render() {
    return (
      <div id='questionnaire'>
        {this.getQuestionnaire()}
      </div>
    )
  }
}

Questionnaire.propTypes = {
  updateProfile: PropTypes.func,
  updateEmissions: PropTypes.func,
  changePage: PropTypes.func,
};

export default Questionnaire