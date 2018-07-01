import React from 'react';

const Header = () => {
	return(
		<header className="site-header">
			<div className="row align-middle align-justify">
				<h1 className="site-header--logo">Food Recipe</h1>
				<nav className="site-header--menu">
					<a href="#">Menu</a>
					<a href="#">Menu</a>
					<a href="#">Menu</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;