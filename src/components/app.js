import React from 'react';
import Profile from './profile';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Modal from './modal';
import { projects } from '../../data/data';
import moment from 'moment';

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this._showModal = this._showModal.bind(this);
		this._closeModal = this._closeModal.bind(this);

		this.state = {
			modalIsOpen: false,
			projectInfo: null
		};

		this._getUserLocation();

	}

	_getUserLocation() {
		if ("geolocation" in navigator) {

			navigator.geolocation.getCurrentPosition(function(position) {
				console.log(position);
			});
		} else {
			console.log('geolocation not available');
		}		
	}

	_showModal(id) {
		this.setState({ modalIsOpen: true });
		this.setState({ projectInfo: projects[id - 1] });
	}

	_closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		const showModal = this.state.modalIsOpen ?
			<Modal 
				closeModal={this._closeModal}
				projectInfo={this.state.projectInfo}
			/>
							: '';

		return (
			<div>
				<div className="topbar">
					<div className="topbar__inner">
						<span className="topbar__time">{moment().format('ll')}</span>
					</div>
				</div>
				<div className="content">
					<Profile />
					<div className="main">
						<Projects showModal={this._showModal} />					
						{ showModal }
					</div>
				</div>				

			</div>
		);
	}
}

