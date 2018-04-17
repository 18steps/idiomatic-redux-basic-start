import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getPeople } from '../reducers';


class App extends Component {
  render() {
    const { fetchStarWars, starWars: { people } } = this.props;
    return (
      <div>
        <h1>Redux Saga</h1>
        <ul>{
          people.map(person => (
            <li key={person.id}>
              <b>{person.name}</b> —
              <i>{person.faction}</i>
            </li>
          ))
        }</ul>
        <button
          onClick={() => fetchStarWars()}
        >Load more
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  starWars: {
    people: getPeople(state),
  },
});

App = connect(
  mapStateToProps,
  actions,
)(App);

export default App;
