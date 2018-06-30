import React from 'react';
import img1 from './../images/img1.jpeg';
import img2 from './../images/img2.jpeg';
import img3 from './../images/img3.jpeg';
import img4 from './../images/img4.jpg';
import img5 from './../images/img5.jpeg';

const Recipes = () => {
	const displayRecipes = () => {
		return(
			<div className="columns">
				<div className="recipe-list--wrap">
					<img src={img1} alt="Recipes" />
					<div className="recipe-list--details">
						<h2 className="recipe-list--title">Recipe Title</h2>
						<div className="recipe-list--publisher">Publisher: <span>Closer Cooking</span></div>
						<a href="#">View Recipes</a>
					</div>
				</div>
			</div>
		);
	};

	return(
		<div className="row recipe-list">
			{ displayRecipes() }
			{ displayRecipes() }
			{ displayRecipes() }
			{ displayRecipes() }
			{ displayRecipes() }
			{ displayRecipes() }
		</div>
	);
};

export default Recipes;