import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateMovie extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: ''
    }
  }
  updateIncident = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <h4>Create Incident</h4>
        <Form onSubmit={this.props.addMovie.bind(null, this.state)}>
          <Label>Movie:</Label>
          <Form.Input type='text' name='title' value={this.state.title} onChange={this.updateIncident}/>
          <Label>description:</Label>
          <Form.Input type='text' name='description' value={this.state.description} onChange={this.updateIncident}/>
          <Button color="green" type='Submit'>Create Incident</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateIncident;
