import React,{Component} from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

class RecipeList extends Component{
	render(){
		return(
			<div className="recipe-list">
				<Recipe title="Pasta" ingredients={['flour','pasta']} img = "pasta.jpeg" instructions="These are the instructions to make pasta."/>
		        <Recipe title="Spaghetti" img = "pasta.jpeg" ingredients={['spag','hetti']} instructions="call pasta spaghetti" />
		    </div>
		);
	}
}

export default RecipeList;