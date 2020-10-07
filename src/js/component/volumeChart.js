import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Bar, Line } from "react-chartjs-2";

export const VolumeChart = props => {
	const { stockSymbol } = props;

	const { store, actions } = useContext(Context);

	const [data, setData] = useState("");
	const [isFetching, setIsFetching] = useState(true);

	const options = {
		maintainAspectRatio: false,
		scales: {
			xAxes: [
				{
					//ticks: { display: false },
					gridLines: {
						display: false
					}
				}
			],
			yAxes: [
				{
					ticks: { display: false },
					gridLines: {
						display: false
					}
				}
			]
		},
		legend: {
			display: false
		},
		elements: {
			point: {
				radius: 1.5
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

	useEffect(
		() => {
			async function loadChartData() {
				if (store.stockChart[stockSymbol] === undefined) {
					await actions.loadChart(stockSymbol);
					setData(store.stockChart[stockSymbol]);
				} else {
					setData(store.stockChart[stockSymbol]);
				}
				setIsFetching(false);
			}
			loadChartData();
		},
		[stockSymbol]
	);

	const dataBar = {
		labels: data.t,
		datasets: [
			{
				type: "bar",
				label: ["Volume"],
				data: data.v,
				backgroundColor: "#EC932F"
			}
		]
	};

	return (
		<div className="chart">
			{isFetching && <div className="pl-3 p-5 m-5">Loading Volumes...</div>}
			{!isFetching && <Bar data={dataBar} options={options} />}
		</div>
	);
};
VolumeChart.propTypes = {
	stockSymbol: PropTypes.string
};
