import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipe title="Pasta" ingredients={['flour','pasta']} img = "pasta.jpeg" instructions="These are the instructions to make pasta."/>
        <Recipe title="Spaghetti" img = "pasta.jpeg" ingredients={['spag','hetti']} instructions="call pasta spaghetti" />
      </div>
    );
  }
}

export default App;
