import React, { Component } from 'react';
const { Bar } = require("react-chartjs");
const { Pie } = require("react-chartjs");

var dataBar = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Git", "Sass", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [1, 59, 80, 81, 56, 55, 40],
        }
    ]
};

var dataPie = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

export default class Skills extends Component {
	render() {
		return (
			<div>
				<div className="col-lg-6"></div>
				<Bar data={dataBar} width="600" height="250"/>
				<Pie data={dataPie} width="600" height="250"/>
			</div>
		)
	}
}
