import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const HeaderApp = () => {
  return (
    <Header>
    
      <ul>
        <div class="ui segment">
        <h3 class="ui center header">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/incidents">Incidents</Link></li>
        <li><Link to="/About">About</Link></li>
      </h3>
      </div>
      </ul>
    </Header>
    )
}

export default HeaderApp;
