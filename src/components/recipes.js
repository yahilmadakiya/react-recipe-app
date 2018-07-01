import React from 'react';
import img1 from './../images/img1.jpeg';

const Recipes = props => {
	return(
		<div className="row recipe-list">
			{ props.recipes.map((recipe) => {
				<div className="large-4 columns">
					<div className="recipe-list--wrap">
						<img src={img1} alt="Recipes" />
						<div className="recipe-list--details">
							<h2 className="recipe-list--title">Recipe Title</h2>
							<div className="recipe-list--publisher">Publisher: <span>Closer Cooking</span></div>
							<a href="#">View Recipes</a>
						</div>
					</div>
				</div>
			})
			}
		</div>
	);
};

export default Recipes;