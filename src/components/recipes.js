import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props => {
	return(
		<div className="row recipe-list">
			{ props.recipes.map((recipe) => {
				return(
					<div className="large-4 medium-4 small-12 columns" key={recipe.title}>
						<div className="recipe-list--wrap">
							<img src={recipe.image_url} alt="Recipes" />
							<div className="recipe-list--details">
								<h2 className="recipe-list--title">
									{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 20)}...`}
								</h2>
								<div className="recipe-list--publisher">Publisher: <span>{recipe.publisher}</span></div>
								<Link to={{
									pathname: `/recipe/${recipe.recipe_id}`,
									state: { recipe: recipe.title }
								}}>View Recipe</Link>
							</div>
						</div>
					</div>
				);
			}) }
		</div>
	);
};

export default Recipes;