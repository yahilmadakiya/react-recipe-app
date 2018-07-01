import React from 'react';
import Header from './header';
import Footer from './footer';

import { Link } from 'react-router-dom';

const API_KEY = '99f3667bc1a20c4962883bd3d8d21181';

class Recipe extends React.Component {

	state = {
		activeRecipe: []
	};

	componentDidMount = async () => {
		const title = this.props.location.state.recipe;
		const req = await fetch( `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
		const res = await req.json();
		this.setState( {
			activeRecipe: res.recipes[0]
		} );
	};

	render() {
		const recipe = this.state.activeRecipe;
		return(
			<div>
				<Header/>
				<div className="row align-center text-center recipe-single">
					{ recipe.length !== 0 &&
					<div className="large-7 medium-10 small-12 columns">
						<img src={recipe.image_url} alt={recipe.title} />
						<h4 className="recipe-single__title">{recipe.title}</h4>
						<p>Publisher: <span>{recipe.publisher}</span></p>
						<p>Website: <a href={recipe.publisher_url}>{recipe.publisher_url}</a></p>
						<Link to="/">Go To Home</Link>
					</div>
					}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Recipe;