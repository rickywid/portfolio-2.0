import React, { Component } from 'react';

export default class Project extends Component {

	render() {
		const smImg = 'style/img/portfolio/sm';
		return (
			<div className="projects__project" onClick={this.props.showModal.bind(this, this.props.id)} >
				<img className="projects__project-img img-responsive" src={`${smImg}/${this.props.image.small}`} alt=""/>
			</div>
		);
	}
};