import React, { Component } from 'react';
import './App.css';
import IncidentContainer from './IncidentContainer';
import Login from './Login';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      Youre lost, will you even be found?
    </div>
    )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/incident" component={IncidentContainer}/>
          <Route component={My404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
