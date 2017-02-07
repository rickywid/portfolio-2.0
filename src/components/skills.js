import React, { Component } from 'react';
import { chartData } from '../../data/data';
const { Bar } = require("react-chartjs");
const { Pie } = require("react-chartjs");

export default class Skills extends Component {
	render() {
		return (
			<div>
				<Bar data={chartData.bar} options={chartData.bar.options} width="600" height="250"/>
				<Pie data={chartData.pie} width="600" height="250"/>
			</div>
		)
	}
}
