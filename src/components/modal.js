import React from 'react';

export default class Modal extends React.Component {
	render() {
		console.log(this.props)
		const { name, title, image, description, link, skill } = this.props.projectInfo;

		return (
			<div className="modal">
				<div className="modal__overlay">
					<div className="modal__body">
						<h1 className="modal__header">{ name }</h1>
						<i className="fa fa-times" aria-hidden="true" onClick={ this.props.closeModal }></i>
						<p className="modal__description">{ description }</p>
					</div>
				</div>
			</div>
		)
	}
}
