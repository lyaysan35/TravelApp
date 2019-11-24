import React, { Component } from 'react';
import { Form, Label, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import PlaceComponent from '../PlaceComponent';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    }
  }

  componentDidMount(){
    this.getPlaces();
    //calling this function here so that the data will be loaded for user
    //as soon as app loads up
  }

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
      const countries = parsedPlaces.data.map(place => {
        return {
          country: place.country,
          city: place.city,
          id: place.id
        }
      });
      this.setState({
        places: parsedPlaces.data
      })
    } catch(err){
      console.log(err);
    }
  }


  render() {
    const domPlaces = this.state.places.map((p) => <li key={p.id}><Link to={{
      pathname: "/place",
      state: {
        places: [p]
      }
    }}>{p.city}, {p.country} </Link></li>);
      return (
        <div>
          <ul>
            { domPlaces }
          </ul>
        </div>
      )
  }
}

export default HomeComponent;