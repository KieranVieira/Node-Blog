import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <h1 {...props}>React-App-Homepage</h1>}/>
      </div>
    );
  }
}

export default App;
