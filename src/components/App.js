import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Saga</h1>
        <div>{

        }</div>
        <button>Load more</button>
      </div>
    );
  }
}

App = connect()(App);

export default App;
