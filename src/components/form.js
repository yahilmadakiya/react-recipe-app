import React from 'react';

const Form = props => {
	return (
		<div className="row align-center">
			<form className="recipe-form" onSubmit={props.getRecipe}>
				<input className="recipe-form--input" type="text" name="recipeName" />
				<button className="recipe-form--submit">Search</button>
			</form>
		</div>
	);
};

export default Form;