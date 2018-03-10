export const chartData = {
	bar: {
		labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Sass', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				fillColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1,
				data: [1, 59, 80, 81, 56, 55, 40],
			}
		],
		options: {
			responsive: true
		}
	},
	pie: [
		{
			value: 300,
			color: '#F7464A',
			highlight: '#FF5A5E',
			label: 'Red'
		},
		{
			value: 50,
			color: '#46BFBD',
			highlight: '#5AD3D1',
			label: 'Green'
		},
		{
			value: 100,
			color: '#FDB45C',
			highlight: '#FFC870',
			label: 'Yellow'
		}
	]
};

export const projects = [
	{
		id: 1,
		name: 'Popcorn',
		skill: 'ReactJS',
		image: {
			small: 'thumb-popcorn.png',
			large: 'popcorn.png'
		},
		link: {
			app: 'http://rickywid.github.io/react-popcorn',
			github: 'https://github.com/rickywid/react-popcorn/tree/gh-pages'
		},
		description: '(In development) A ReactJS application that displays movie information provided by the themoviedb API.'
	},
	{
		id: 2,
		name: 'Weather App',
		skill: 'ReactJS',
		image: {
			small: 'thumb-weather.png',
			large: 'weather.png'
		},
		link: {
			app: 'http://rickywid.github.io/react-weather',
			github: 'https://github.com/rickywid/react-weather/tree/gh-pages'
		},
		description: 'A weather application created using React/Redux. Weather data was gathered from openweathermap.org\'s API. A chart is displayed to display the 5 day forecast as well as weather icons to provide further weather details.'
	},
	{
		id: 3,
		name: 'Reddit Clone',
		skill: 'ReactJS',
		image: {
			small: 'thumb-reddit.png',
			large: 'reddit.png'
		},
		link: {
			app: 'http://rickywid.github.io/reddit',
			github: 'https://github.com/rickywid/reddit/tree/gh-pages'
		},
		description: 'I created a clone of the popular site Reddit. Several tools were used to create this site including React, React Router, Redux, Redux Promise, Webpack, MomentJS and Axios. Reddit\'s API was used to fetch data such as threads, comments and subreddits and other information.'
	},
	{
		id: 4,
		name: 'Front Row',
		skill: 'ReactJS',
		image: {
			small: 'thumb-frontrow.png',
			large: 'frontrow.png'
		},
		link: {
			app: 'http://rickywid.github.io/front-row',
			github: 'https://github.com/rickywid/front-row/tree/gh-pages'
		},
		description: 'A site built using ReactJS, Redux, React Router, Webpack and Bootstrap. The data was gathered using SeatGeek\'s API to display events, performers, venues and more. I used sites such as Ticketmaster, StubHub and the SeatGeek website as a guideline.'
	},
	{
		id: 5,
		name: 'Hangman',
		skill: 'JavaScript',
		image: {
			small: 'thumb-hangman.png',
			large: 'hangman.png'
			},
		link: {
			app: 'https://rickywid.github.io/hangman_js/',
			github: 'https://github.com/rickywid/hangman_js/tree/gh-pages'
		},
		description: 'A hangman game created in vanilla Javascript. When the game loads, a random word will be selected from an array of categories. The user has a limited amount of guesses and can ask for a hint if required. The game ends if all the letters in the word is revealed else the user loses.'
	},
	{
		id: 6,
		name: 'React Bin',
		skill: 'ReactJS / MeteorJS',
		image: {
			small: 'thumb-reactbin.png',
			large: 'reactbin.png'
		},
		link: {
			app: 'http://reactbin.herokuapp.com/',
			github: 'https://github.com/rickywid/hangman_js/tree/gh-pages'
		},
		description: 'This is an application built on the Meteor and React frameworks along with React-Router, React-CodeMirror and Markdown npm modules.'
	},
	{
		id: 7,
		name: 'Blog CMS',
		skill: 'Laravel',
		image: {
			small: 'thumb-laravel-cms.png',
			large: 'https://github.com/rickywid/CMS_laravel'
		},
		link: {
			app: 'http://iblog-it.herokuapp.com/',
			github: 'https://github.com/rickywid/CMS_laravel'
		},
		description: 'A content mangement system(CMS) I created using PHP\'s Laravel framework. The application includes user login/registration, password recovery, CRUD operations on users, posts, comments and images. All comments must be confirmed first by an Admin user before being displayed publicly and the Admin area is restricted only to Admin users and active users only.'
	},
	{
		id: 8,
		name: 'Pong',
		skill: 'JavaScript',
		image: {
			small: 'thumb-pong.png',
			large: 'pong.png'
		},
		link: {
			app: 'https://rickywid.github.io/pong_js',
			github: 'https://github.com/rickywid/pong_js/tree/gh-pages'
		},
		description: 'The classic Pong game recreated in vanilla JS and HTML Canvas. This was a good intro project into game development for me. I learned more about different event handlers and the browser DOM object. This was also my first time using HTML5 Canvas to draw the various objects used in the game.'
	},
	// {
	// 	id: 9,
	// 	name: 'Another To Do List',
	// 	skill: 'Ruby on Rails',
	// 	image: {
	// 		small: 'thumb-todo.png',
	// 		large: 'todo.png'
	// 	},
	// 	link: {
	// 		app: 'https://rails-trackr.herokuapp.com/',
	// 		github: 'https://github.com/rickywid/rails_todo'
	// 	},
	// 	description: 'A Ruby on Rails project I built to get a basic understanding of the Rails MVC framework. By doing this project I learned more about the Model, View, Controller framework and how you can easily build and manage large applications.'
	// },
	// {
	// 	id: 10,
	// 	name: 'Springfield Today',
	// 	skill: 'HTML / CSS',
	// 	image: {
	// 		small: 'thumb-springfield.png',
	// 		large: 'springfield.png'
	// 	},
	// 	link: {
	// 		app: 'http://rickywid.github.io/springfield-today',
	// 		github: 'https://github.com/rickywid/springfield-today'
	// 	},
	// 	description: 'A hand coded news portal website based off of USA Today\'s design/layout. This project was just another way for me to practice my HTML/CSS skills without the use of any frameworks. All of the images were edited and resized using Adobe Photoshop. Also a JQuery plugin was used for the carousel portion. I spent a great amount of time on the layout and design to try to replicate it as closely as I can to the original.'
	// },
	{
		id: 11,
		name: 'Travel Gallery',
		skill: 'HTML / CSS',
		image: {
			small: 'thumb-travel.png',
			large: 'travel.png'
		},
		link: {
			app: 'http://rickywid.github.io/travel',
			github: 'https://github.com/rickywid/travel'
		},
		description: 'An image gallery written and designed in HTML/CSS. A JQuery plugin was used to create the scroll to anchor effect as well as the lightbox modal. Bootstrap\'s grid system was implemented for the general layout. All the photos were taken by me while I was traveling from 2012-2014.'
	}
	// {
	// 	id: 12,
	// 	name: 'Pixel Sketch',
	// 	skill: 'HTML / CSS / JQuery',
	// 	image: {
	// 	small: 'thumb-pixelsketch.png',
	// 		large: 'pixelsketch.png'
	// 	},
	// 	link: {
	// 		app: 'http://rickywid.github.io/pixel-sketch',
	// 		github: 'https://github.com/rickywid/pixel-sketch/tree/gh-pages'
	// 	},
	// 	description: 'A Javascript/JQuery web app that I created where I applied the skills I\'ve learned into a fun and interesting project. The app allows users to choose different grid sizes and select various colors to color the grid. This project was one of the course assignments over at the The Odin Project.'
	// }
]
