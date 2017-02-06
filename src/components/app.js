import React from 'react';
import Profile from './profile';
import About from './about';
import Skills from './skills';
import Projects from './projects';

const App = () => {
	return (
		<div className="row">
			<div className="row">
				<header className="header">
					<h1 className="header__title">My Portfolio</h1>
				</header>
			</div>

			<Profile />
	
			<div className="main">
				<About />
				<Skills />
				<Projects /> 
			</div>
		</div>
	);
};

export default App;
