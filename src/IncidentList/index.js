import React from 'react';
import { Card, Button} from 'semantic-ui-react';
// Pure Function, takes an input and renders ui
const Incidents = (props) => {
  // you'll propably have to map over the movies and create your list items here
  const Incidents = props.Incidents.map((Incidents, i) => {
    return (
      <Card key={Incidents._id}>
        <Card.Content>
          <Card.Header>{Incidents.title}</Card.Header>
          <Card.Description>{Incidents.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="green" onClick={props.openAndEdit.bind(null, Incidents)}>Edit Incident</Button>
          <Button color="red" onClick={props.deleteIncident.bind(null, Incidents._id)}>Delete Incident</Button>
        </Card.Content>
      </Card>
      )
  })

  return (
    <div>
      <h3>Incidents</h3>
      <Card.Group className="centered">
        {Incidents}
      </Card.Group>
    </div>
    )
}


export default Incidents;
