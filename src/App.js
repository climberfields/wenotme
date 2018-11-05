import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Title from './Components/Title';
//import MessageList from './Components/MessageList';
//import SendMessageForm from './Components/SendMessageForm';
import Mapcontainer from './GoogleMapsApi/Map';


//getAPI = URL('07ed1b63-59da-4733-9572-2288d0cacd7b:8tFWvaqQwkPmXZy+IpEE7oliFmPTyUUvJOGGF9jw3ds=');
    
    const DUMMY_DATA = [
       { 
        senderId: "perborgen",
        text: "who'll win?"
       },
        {
            senderId: "janedoe",
            text: "who'll win?"
        }
    ];

class App extends Component {
constructor(){
    super()
    this.state = {
        messages: this.Dummy_DATA
    }
}
  render() {
    return (
      <div className="App">
      <div className="mapContainer">
          <Mapcontainer />
      </div>
      <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
