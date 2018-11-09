import React, { Component } from 'react';
import './App.css';
import IncidentContainer from './IncidentContainer';
import Login from './Login';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import MapContainer from './MapContainer';
import About from './About';

const My404 = () => {
  return (
    <div>
      Yo homie this isn't the page you're looking for.
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
        <About />
        </div>
      </div>
    );
  }
}

export default App;
