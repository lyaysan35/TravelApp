import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import PlaceComponent from './PlaceComponent';
import PlaceList from './PlaceList';
import HeaderComponent from './HeaderComponent';
import { Route, Switch } from 'react-router-dom';

const default404 = () => {
  return (
    <div>
      <h3>You are lost.</h3>
    </div>
  )
};

class App extends Component {
  // Need to add constructor to add state

  setCountries(countries) {
    // Set state
  }
  // Create a function to set country state
  // Pass setCountries to PlaceComponent as a prop 
  // In PlaceComponent call this.props.setCountries(countries)

  render() {
    return (
      <main>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={ Register } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/places" component={ PlaceComponent } />
          <Route component={ default404 } />
        </Switch>
      </main>
  );
  }
  
}

export default App;
