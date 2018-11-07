import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditIncident = (props) => {
  console.log(props)
  return (
    <Modal open={props.open}>
      <Header>Edit Incident</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            Edit Incident Title:
          </Label>
          <Form.Input type='text' name='title' value={props.incidentToEdit.title} onChange={props.handleEditChange}/>
          <Label>
            Edit Incident Description:
          </Label>
          <Form.Input type='text' name='description' value={props.incidentToEdit.description} onChange={props.handleEditChange}/>

          <Modal.Actions>
            <Button color='green' type='submit'>Edit Incident</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditIncident;
