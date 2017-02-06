import React, { Component } from 'react';
import { projects } from '../../data/data';
import Project from './project';

export default class Projects extends Component {

	_renderProject(data){
		const id = data.id;
		const name = data.name;
		const skill = data.skill;
		const image = data.image;
		const link = data.link;

		return <Project 
					key={id}
					id={id}
					name={name}
					skill={skill}
					image={image}
					link={link}
					showModal={this.props.showModal}
		/>
	}

	render() {

		return (
			<div className="projects">
				{projects.map((project)=> this._renderProject(project))}
			</div>
		)
	}
}