import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const {title,img,instructions} = this.props;
    const ingredients = this.props.ingredients.map((ing,index) =>(
        <li key={index}>{ing}</li>
    ));

    return (
      <div className="recipe-card">
        <img className = "recipe-card-image" src = {img} alt ="pasta-img"/>
        <div className="recipe-card-content">
          <h1 className="recipe-title">{title}</h1>
          <h2> Ingredients: </h2>
          <ul>
            {ingredients}
          </ul>
          <h2> Instructions: </h2>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;
