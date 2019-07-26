import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Login';
import Profile from './Profile';
import Projects from './Projects';
import About from './About';
import Questionnaire from './Questionnaire';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/questionnaire" component={Questionnaire} />
        </Switch>
      </div>
    )
  }
}

export default App