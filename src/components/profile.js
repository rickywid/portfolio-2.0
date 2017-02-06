import React, { Component } from 'react';

export default class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<img src="../style/img/team/profile1.png" className="profile__img" height="100px" alt=""/>
				<h3 className="profile__name">Ricky JW</h3>
				<p className="profile__title">Web Developer</p>
				<div className="profile__social-links">
					<a href="#" className="profile__social-link"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="#" className="profile__social-link"><i className="fa fa-github" aria-hidden="true"></i></a>
					<a href="#" className="profile__social-link"><i className="fa fa-envelope" aria-hidden="true"></i></a>
				</div>

				<p className="profile__bio">
					Who am I? My name is Ricky and I am a web developer from Toronto, Canada. I've been learning web development/design as a hobby on and off for the past few years. Only recently did I decide to pursue web development professionally. 
					I started learning all the fundamentals of web development including HTML/CSS & JavaScript from online videos, blogs, tutorials and books. I began building some simple sites but as time progressed I wanted to build bigger, better, dynamic and more interactive websites so I picked up a few other skills along the way. 
				</p>
			</div>
		)
	}
}