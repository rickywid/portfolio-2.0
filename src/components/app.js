import React from 'react';
import Profile from './profile';
import About from './about';
import Skills from './skills';
import Projects from './projects';

const App = () => {
	return (
		<div className="row">
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
