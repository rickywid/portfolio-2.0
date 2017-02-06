import React from 'react';
import Profile from './profile';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Modal from './modal';
import { projects } from '../../data/data';

export default class App extends React.Component {

	constructor(props){
		super(props);

		this._showModal = this._showModal.bind(this);
		this._closeModal = this._closeModal.bind(this);

		this.state = { 
			modalIsOpen: false,
			projectInfo: null
		}
	}

	_showModal(id){
		this.setState({ modalIsOpen: true });
		this.setState({ projectInfo: projects[id - 1] });
	}

	_closeModal(){
		this.setState({ modalIsOpen: false });
	}

	render(){

		let showModal = this.state.modalIsOpen ? 
						<Modal 
							closeModal={ this._closeModal } 
							projectInfo={ this.state.projectInfo }
						/> 
							: '' ;

		return (
			<div className="row">
				<Profile />
		
				<div className="main">
					<Projects showModal={ this._showModal } /> 
					<About />
					<Skills />
					{ showModal }
				</div>
			</div>
		);		
	}
};


