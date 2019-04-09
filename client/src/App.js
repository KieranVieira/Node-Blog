import React, { Component } from 'react';
import { Route } from 'react-router';

import HomePageView from './views/HomePageView';
import SingleUserView from './views/SingleUserView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <HomePageView {...props} />}/>
        <Route exact path="/user/:id" render={props => <SingleUserView {...props} />}/>
      </div>
    );
  }
}

export default App;
