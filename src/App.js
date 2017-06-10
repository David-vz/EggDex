import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let Pokedex = require('pokedex-promise-v2');
let P = new Pokedex();





class App extends Component {
  constructor(props){
    super(props);
    this.state = { pokemon: "nothing"  };
    //console.log(this.printToConsole())

    this.setPokemon(1);

  }

  setPokemon(id){

    P.getPokemonByName(id) // with Promise

        .then((response) => {
          var self = this;
          console.log(response.name);
          this.setState({pokemon: response.name});

          //return response.name;

        })

        .catch(function(error) {
          console.log('There was an ERROR: ', error);
        });

      //apiCall.then(blob => this.setState({pokemon: blob.name}));



  }

  /*

  P.getPokemonByName('3') // with Promise
      .then(function(response) {
        console.log(response.name);
        console.log(this);
        this.setState(response.name);

        //return response.name;

      })
      .catch(function(error) {
        console.log('There was an ERROR: ', error);
      });
      */
  //lookupPokemon() => {}}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>pokemon: State: {this.state.pokemon}</h2>
        </div>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
