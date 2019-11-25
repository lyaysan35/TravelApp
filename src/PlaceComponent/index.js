import React, { Component } from 'react';
import PlaceList from '../PlaceList'
import CreatePlaceForm from '../CreatePlaceForm'
import {Grid} from 'semantic-ui-react'
import EditPlaceModal from '../EditPlaceModal';


class PlaceContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      places: [],
      countries: [],
      showEditModal: false,
      placeToEdit:  {
          city: '',
          country: '',
          image: '',
          text: '',
          created_at: '',
          id: ''
      }
    }
  }
  componentDidMount(){
    this.getPlaces();
    //calling this function here so that the data will be loaded for user
    //as soon as app loads up
  }
  //as long as you write an arrow funtion you don't have to use .bind
  getPlaces = async () => {

    try {
      //api calls need to be made from where they exist in state
      //process.env allows us to access our env. variable 
      //we are making a request to our flask app
      const places = await fetch(process.env.REACT_APP_API_URL + '/api/v1/places/', {
        credentials: 'include' //sending sesion cookie
      });
      const parsedPlaces = await places.json();
      console.log(parsedPlaces);
      let countries = parsedPlaces.data.map(place => {
        return {
          country: place.country,
          city: place.city
        }
      });
      console.log(countries)
      this.setState({
        places: parsedPlaces.data, //array from flask
        countries: countries
      })
    } catch(err){
      console.log(err);
    }
  }
  addPlace = async (e, placeFromForm) => {
    placeFromForm.userId = this.props.userId;
    console.log('placeForm >>', placeFromForm);
      e.preventDefault();
      try {

        // We have to send JSON
        // createdPlaceResponse variable will store the response from the express API
        const createdPlaceResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/places/', {
          method: 'POST',
          body: JSON.stringify(placeFromForm),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        // we have to turn the response from flask into
        // an object we can use
        const parsedResponse = await createdPlaceResponse.json();
        console.log(parsedResponse, ' this is response')
        
        // we are emptying all the places that are living in state into a new array,
        // and then adding the place we just created to the end of it
        // the new place which is called parsedResponse.data
        
        this.setState({places: [...this.state.places, parsedResponse.data]})
        //... it is empting the sate and putting it into the new array
        //then we are adding in our new object

  
      } catch(err){
        console.log('error')
        console.log(err)
      }
      // request address will start with 'http://localhost:9000'
      // becuase after we create it, we want to add it to the places array
  }
  deletePlace = async (idOfPlace) => {
    console.log(idOfPlace)
    const deletePlaceResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/places/' + idOfPlace, {
                                              method: 'DELETE',
                                              credentials: 'include'
                                            });

    // This is the parsed response from place
    const deletePlaceParsed = await deletePlaceResponse.json();
    console.log(deletePlaceParsed)
    // Now that the db has deleted our item, we need to remove it from state
    this.setState({places: this.state.places.filter((place) => place.id !== idOfPlace )})
  }
  openEditModal = (placeFromList) => {
      console.log('place', placeFromList);

      this.setState({
          showEditModal: true,
          placeToEdit: {
              ...placeFromList 
          }
      })
  }
  handleEditChange = (e) => {
      this.setState({
          placeToEdit: {
              ...this.state.placeToEdit,
              [e.currentTarget.name]: e.currentTarget.value
          }
      })
  }
  closeAndEdit = async(e) => {
    e.preventDefault();
    try {
        const editResponse = await fetch(process.env.REACT_APP_API_URL + 
            '/api/v1/places/' + this.state.placeToEdit.id, {
                method: 'PUT',
                body: JSON.stringify(this.state.placeToEdit),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const editResponseParsed = await editResponse.json();
            console.log('edit response', editResponseParsed);

            const newPlaceArrayWithEdit = this.state.places.map(
                (place) => {
                    if(place.id === editResponseParsed.data.id) {
                        place = editResponseParsed.data
                    }
                    return place;
                })
                this.setState({
                    places: newPlaceArrayWithEdit,
                    showEditModal: false
                })
    }catch(err) {
        console.log(err)
    }
  }
  render(){
    console.log(this.state.places);
    console.log(this.props.userId);
    let userPlaces;
    (this.props.userId) ? userPlaces = this.state.places.filter(p => parseInt(p.userId) === this.props.userId) : userPlaces = this.state.places;
    return (
      <div style={{backgroundColor: '#C1F9F7', minHeight: '100vh', height: '100%'}}>
        <Grid columns={2}  style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row style={{backgroundColor: '#C1F9F7'}}>
          <Grid.Column>
            <PlaceList openEditModal={this.openEditModal} places={userPlaces} userId={this.props.userId} deletePlace={this.deletePlace}/>
          </Grid.Column>
          {
            (this.props.userId) ?
              <Grid.Column>
                <CreatePlaceForm addPlace={this.addPlace}/>
              </Grid.Column>
            : ""
          }
          <EditPlaceModal handleEditChange={this.handleEditChange} 
          closeAndEdit={this.closeAndEdit} placeToEdit={this.state.placeToEdit}
          open={this.state.showEditModal} />
        </Grid.Row>
      </Grid>
      </div>
      )
  }
}

export default PlaceContainer