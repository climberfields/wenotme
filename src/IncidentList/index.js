import React from 'react';
import { Card, Button, Font} from 'semantic-ui-react';
// Pure Function, takes an input and renders ui
const Incidents = (props) => {
  // you'll propably have to map over the movies and create your list items here
  const incidents = props.incidents.map((incident, i) => {
    return (
      <Card key={incident._id}>
        <Card.Content>
          <Card.Header>{incident.title}</Card.Header>
          <Card.Description>{incident.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="green" onClick={props.openAndEdit.bind(null, incident)}>Edit Incident</Button>
          <Button color="red" onClick={props.deleteIncident.bind(null, incident._id)}>Delete Incident</Button>
          <Button color="red" onClick={props.deleteIncident.bind(null, incident._id)}>Delete Incident</Button>
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
