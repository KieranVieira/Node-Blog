import React, { Component } from 'react';
import { Route } from 'react-router';

import HomePageView from './views/HomePageView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <HomePageView {...props} />}/>
      </div>
    );
  }
}

export default App;
