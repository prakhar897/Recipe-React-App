import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default App;
