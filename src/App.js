import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


P.getPokemonByName('bulbasaur') // with Promise
    .then(function(response) {
      console.log(response.name);
      //return response.name;

    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });



class App extends Component {
  constructor(props){
    super(props);
    this.state = { pokemon: {name:P.getPokemonByName(1)}  };
  }

  testFunc(name){this.setState({pokemon: {name:name} });}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>pokemon: {this.state.pokemon.name}</h2>
        </div>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
