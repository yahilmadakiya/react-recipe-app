import React from 'react';

import Header from './header';
import Recipes from './recipes';
import Form from './form';
import Footer from './footer';

import './../css/style.css';

const API_KEY = '99f3667bc1a20c4962883bd3d8d21181';

class App extends React.Component{
	state = {
		recipes: []
	};
	getRecipe = async (e) => {
		e.preventDefault();
		const recipeName = e.target.elements.recipeName.value;
		const api_call = await fetch( `http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`, {mode: 'cors'});
		const data = await api_call.json();
		this.setState( {
			recipes: data.recipes
		} );
		console.log( this.state.recipes );
	};

	render() {
		return(
			<div>
				<Header />
				<Form getRecipe={this.getRecipe}/>
				<Recipes recipes={this.state.recipes} />
				<Footer />
			</div>
		);
	}
}

export default App;