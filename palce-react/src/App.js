import React from 'react';
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

const App = () => {
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

export default App;
