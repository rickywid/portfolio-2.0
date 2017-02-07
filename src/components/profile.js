import React, { Component } from 'react';

export default class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="profile__inner">
					<img src="../style/img/team/profile1.png" className="profile__img" height="100px" alt="" />
					<h3 className="profile__name">Ricky JW</h3>
					<p className="profile__title">Web Developer</p>
					<div className="profile__social-links">
						<a href="#" className="profile__social-link"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						<a href="#" className="profile__social-link"><i className="fa fa-github" aria-hidden="true"></i></a>
						<a href="#" className="profile__social-link"><i className="fa fa-envelope" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		);
	}
}
