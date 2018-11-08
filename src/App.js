import React, { Component } from 'react';
import './App.css';
import IncidentContainer from './IncidentContainer';
import Login from './Login';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import MapContainer from './MapContainer';

const My404 = () => {
  return (
    <div>
      You're lost, will you even be found?
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
          <Route exact path="/incidents" component={IncidentContainer}/>
          <Route component={My404}/>
        
        </Switch>
        <div className="MapContainer">
        <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
