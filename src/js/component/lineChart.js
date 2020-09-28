import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Bar, Line } from "react-chartjs-2";

import PropTypes from "prop-types";

export const LineChart = props => {
	const { stockSymbol } = props;
	//console.log(getTime());
	const { store, actions } = useContext(Context);
	const options = {
		scales: {
			xAxes: [
				{
					ticks: { display: false },
					gridLines: {
						display: false
					}
				}
			],
			yAxes: [
				{
					//ticks: { display: false },
				}
			]
		},
		legend: {
			display: false
		},
		elements: {
			point: {
				radius: 0
			},
			line: {
				tension: 0 // disables bezier curves
			}
		},
		layout: {
			padding: {
				right: 20,
				left: 10
			}
		}
	};

	if (store.Watchlist.s === "ok") {
		const dates = actions.createDateArray(store.Watchlist.t);
		//actions.createDateArray(store.Watchlist.t);
		//console.log(actions.createDateArray(store.Watchlist.t));
		const dataLine = {
			labels: dates,
			datasets: [
				{
					fill: false,
					label: ["Price"],
					data: store.Watchlist.c,
					borderColor: "#2493ed",
					backgroundColor: "#2493ed",
					borderWidth: "1"
				}
			]
		};

		return (
			<div className="chart">
				<Line data={dataLine} options={options} />
				<div />
			</div>
		);
	} else {
		const dataLine = {
			labels: ["We", "Are", "Loading", "Your", "Data", "..."],
			datasets: [
				{
					type: "line",
					fill: false,
					label: ["Price"],
					data: [50, 50, 0, 100, 50, 50],
					borderColor: "#2493ed",
					backgroundColor: "#2493ed"
				}
			]
		};

		return (
			<div className="chart">
				<Line data={dataLine} options={options} />
				<div />
			</div>
		);
	}
};

LineChart.propTypes = {
	stockSymbol: PropTypes.string
};
