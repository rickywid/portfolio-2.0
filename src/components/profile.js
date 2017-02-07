import React, { Component } from 'react';

export default class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="profile__inner">
					<img src="../style/img/team/profile1.png" className="profile__img" height="150px" alt="" />
					<h3 className="profile__name">Ricky JW</h3>
					<p className="profile__title">Web Developer</p>
					<div className="profile__social-links">
						<a href="http://github.com/rickywid" className="profile__social-link"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						<a href="https://www.linkedin.com/in/ricky-widjaja-791059b6" className="profile__social-link"><i className="fa fa-github" aria-hidden="true"></i></a>
						<a href="mailto:rickywid@hotmail.com" className="profile__social-link"><i className="fa fa-envelope" aria-hidden="true"></i></a>
					</div>

					<div className="profile__skills-wrap">
						<h5 className="profile__skills-header">I'm currently using</h5>
						<ul className="profile__skills-primary">
							<li className="profile__skills-name">HTML</li>
							<li className="profile__skills-name">CSS/Sass</li>
							<li className="profile__skills-name">JavaScript</li>
							<li className="profile__skills-name">Responsive Design</li>
							<li className="profile__skills-name">Bootstrap/Foundation</li>
							<li className="profile__skills-name">ReactJS</li>
							<li className="profile__skills-name">Git</li>
							<li className="profile__skills-name">Sublime Text</li>
							<li className="profile__skills-name">Ubuntu</li>
							<li className="profile__skills-name">Adobe Photoshop</li>
						</ul>
					
						<h5 className="profile__skills-header">I've experimented with</h5>
						<ul className="profile__skills-secondary">
							<li className="profile__skills-name">Laravel</li>
							<li className="profile__skills-name">Ruby on Rails</li>
							<li className="profile__skills-name">Wordpress</li>
							<li className="profile__skills-name">JavaScript ES6</li>
							<li className="profile__skills-name">PHP/MySQL</li>
							<li className="profile__skills-name">BEM</li> 
						</ul>	
					</div>			
				</div>
			</div>
		);
	}
}
