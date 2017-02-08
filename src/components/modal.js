import React from 'react';

export default class Modal extends React.Component {
	render() {
		console.log(this.props)
		const { id, name, title, image, description, link, skill } = this.props.projectInfo;

		return (
			<div className="modal">
				<div className="modal__overlay">
					<div className="modal__body">
						<div className="modal__header-wrap">
							<h1 className={`modal__header modal__header--${id}`}>{ name }</h1>
							<span className="modal__skills label label-info">{skill}</span>
							<i className="fa fa-times" aria-hidden="true" onClick={ this.props.closeModal }></i>
						</div>

						<p className="modal__description">{ description }</p>
						<a href={link.app} className="modal__button modal__button--demo">Live Demo</a> 
						<a href={link.github} className="modal__button modal__button--code">View Code</a>
					</div>
				</div> 
			</div>
		)
	}
}
