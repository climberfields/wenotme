import React from 'react';
import { Card, Button} from 'semantic-ui-react';
// Pure Function, takes an input and renders ui
const Incidents = (props) => {
  // you'll propably have to map over the movies and create your list items here
  const incidents = props.incidents.map((incidents, i) => {
    return (
      <Card key={incidents._id}>
        <Card.Content>
          <Card.Header>{incidents.title}</Card.Header>
          <Card.Description>{incidents.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="green" onClick={props.openAndEdit.bind(null, incidents)}>Edit Incident</Button>
          <Button color="red" onClick={props.deleteIncidents.bind(null, incidents._id)}>Delete Incident</Button>
          <Button color="red" onClick={props.deleteIncidents.bind(null, incidents._id)}>Delete Incident</Button>
        </Card.Content>
      </Card>
      )
  })

  return (
    <div>
      <h3>Incidents</h3>
      <Card.Group className="centered">
        {incidents}
      </Card.Group>
    </div>
    )
}


export default Incidents;
