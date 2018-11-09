import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateIncident extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      location: ''
    }
  }
  updateIncident = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <div class="ui form">
        <h4>Create Incident</h4>
        <Form onSubmit={this.props.addIncident.bind(null, this.state)}>
          <Label>Incident:</Label>
          <Form.Input type='text' name='title' value={this.state.title} onChange={this.updateIncident}/>
          <div class="field">
          <Label>description:</Label>
          <Form.Input type='text' name='description' value={this.state.description} onChange={this.updateIncident}/>
         </div>
          <Label>location:</Label>
          <Form.Input type='text' name='location' value={this.state.location} onChange={this.updateIncident}/>
          
    <Button color="green" type='Submit'>Create Incident</Button>  
        </Form>
    </div>
      </Segment>
      )
  }
}

export default CreateIncident;
