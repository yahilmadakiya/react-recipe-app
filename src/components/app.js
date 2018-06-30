import React from 'react';

import Header from './header';
import Recipes from './recipes';
import Footer from './footer';

import './../css/style.css';

class App extends React.Component{
	render() {
		return(
			<div>
				<Header />
				<Recipes />
				<Footer />
			</div>
		);
	}
}

export default App;