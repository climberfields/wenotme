import React, { Component } from 'react';
import CreateMovie from '../CreateMovie';
import MovieList from '../MovieList';
import EditMovie from '../EditMovie';
import { Grid } from 'semantic-ui-react';

class IncidentContainer extends Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      movieToEdit: {
        title: '',
        description: '',
        _id: ''
      },
      showEditModal: false
    }
  }
  getIncident = async () => {
    // Where We will make our fetch call to get all the movies
    const incident = await fetch('http://localhost:9000/api/v1/incident');
    const incidentParsedJSON = await movies.json();
    return incidentParsedJSON
  }
  componentDidMount(){
    // get ALl the movies, on the intial load of the APP
    this.getIncident().then((movies) => {
      this.setState({incident: incident.data})
    }).catch((err) => {
      console.log(err);
    })
    /// Where you call this.getMovies
  }
  addMovie = async (movie, e) => {
    // .bind arguments take presidence over every other argument
    e.preventDefault();
    console.log(incident);

    try {

      // We have to send JSON
      // createdMovie variable will store the response from the express API
      const createdIncident = await fetch('http://localhost:9000/api/v1/incident', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(incident),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // we have to turn the response from express into
      // an object we can use
      const parsedResponse = await createdIncident.json();
      console.log(parsedResponse, ' this is response')
      // we are emptying all the movies that are living in state into a new array,
      // and then adding the movie we just created to the end of it
      // the newMovie is called parsedResponse.data
      this.setState({Incident: [...this.state.Incident, parsedResponse.data]})


    } catch(err){
      console.log('error')
      console.log(err)
    }
    // request address will start with 'http://localhost:9000'
    // Set up your post request with fetch, Maybe lookup how do i do post request with fetch,
    // headers: {'Content-Type': 'application/json'}
    // becuase after we create it, we want to add it to the movies array
  }
  deleteIncident = async (id) => {


    const deleteIncidentResponse = await fetch('http://localhost:9000/api/v1/Incident/' + id, {
                                              method: 'DELETE'
                                            });

    // This is the parsed response from express
    const deleteIncidentParsed = await deleteIncidentResponse.json();




    // Now that the db has deleted our item, we need to remove it from state
    this.setState({Incident: this.state.Incident.filter((Incident) => Incident._id !== id )})

    console.log(deleteIncidentParsed, ' response from express server')
      // Then make the delete request, then remove the movie from the state array using filter
  }
  handleEditChange = (e) => {

    this.setState({
      IncidentToEdit: {
        ...this.state.IncidentToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });


    // movieToEdit: {
    //   _id: this.state.movieToEdit._id,
    //   title: this.state.movieToEdit.title,
    //   description: this.state.movieToEdit.description
    // }
  }
  closeAndEdit = async (e) => {
    // Put request,
    e.preventDefault();
    // then update state
    try {

      const editResponse = await fetch('http://localhost:9000/api/v1/Incident/' + this.state.IncidentToEdit._id, {
        method: 'PUT',
        body: JSON.stringify({
          title: this.state.IncidentToEdit.title,
          description: this.state.IncidentToEdit.description
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseParsed = await editResponse.json();

      const newIncidentArrayWithEdit = this.state.movies.map((movie) => {

        if(Incident._id === editResponseParsed.data._id){
          movie = editResponseParsed.data
        }

        return Incident
      });

      this.setState({
        showEditModal: false,
        Incident: newIncidentArrayWithEdit
      });

      console.log(editResponseParsed, ' parsed edit')




    } catch(err){
      console.log(err)
    }

    // If you feel up to make the modal (EditMovie Component) and show at the appropiate times

  }
  openAndEdit = (IncidentFromTheList) => {
    console.log(IncidentFromTheList, ' IncidentToEdit  ');


    this.setState({
      showEditModal: true,
      IncidentToEdit: {
        ...IncidentFromTheList
      }
    })

    // movieToEdit = {
    //   title: movieFromTheList.title,
    //   description: movieFromTheList.description
    // }
  }
  render(){
    console.log(this.state)
    return (
      <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row>
          <Grid.Column>
            <CreateIncident addIncident={this.addIncident}/>
          </Grid.Column>

          <Grid.Column>
            <MovieList movies={this.state.Incident} deleteIncident={this.deleteIncident} openAndEdit={this.openAndEdit}/>
          </Grid.Column>
          <EditIncident open={this.state.showEditModal} IncidentToEdit={this.state.IncidentToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
        </Grid.Row>
      </Grid>
      )
  }
}

export default IncidentContainer;
