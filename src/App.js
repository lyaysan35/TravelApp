import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import PlaceComponent from './PlaceComponent';
import PlaceList from './PlaceList';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import { Route, Switch } from 'react-router-dom';

const default404 = () => {
  return (
    <div>
      <h3>You are lost.</h3>
    </div>
  )
};


class App extends Component {
     constructor() {
        super()

        this.state ={
          userId: ''
        };
        this.setLoggedInUser.bind(this);
        this.clearUserId.bind(this);
      }

  setCountries(countries) {
    this.state.countries = countries;
  }

  setLoggedInUser = (userId) => {
    this.setState({userId: userId});
    console.log("UserId >>", this.state.userId);
  }

  clearUserId = () => {
    this.setState({userId: ''});
    console.log('UserId Cleared >>', this.state.userId);
  }
  // Create a function to set country state
  // Pass setCountries to PlaceComponent as a prop 
  // In PlaceComponent call this.props.setCountries(countries)

  render() {
    return (
      <main className="main">
        <HeaderComponent userId={ this.state.userId } onLogout={ this.clearUserId } />
        <Switch>
          <Route exact path="/" component={ HomeComponent } />
          <Route exact path="/login" render={(props) => <Login {...props} onLogin={ this.setLoggedInUser } /> } />
          <Route exact path="/register" render={(props) => <Register {...props} onRegister={ this.setLoggedInUser } /> } />
          <Route exact path="/places" render={(props) => <PlaceComponent {...props} userId={ this.state.userId } /> } />
          <Route exact path="/place" render={(props) => <PlaceList {...props} userId={ this.state.userId } /> } />
          <Route component={ default404 } />
        </Switch>
      </main>
  );
  }
  
}

export default App;
