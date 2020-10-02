import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Bar, Line } from "react-chartjs-2";

export const PricesChart = props => {
	const { stockSymbol } = props;

	const { store, actions } = useContext(Context);

	const [data, setData] = useState("");
	const [isFetching, setIsFetching] = useState(true);

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
				radius: 1.5
			},
			line: {
				tension: 0 // disables bezier curves
			}
		},
		layout: {
			padding: {
				right: 20,
				left: 16
			}
		}
	};

	useEffect(() => {
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
	}, []);

	const dataLine = {
		labels: data.t,
		datasets: [
			{
				fill: false,
				label: ["Price"],
				data: data.c,
				borderColor: "#000000",
				backgroundColor: "#2493ed"
			}
		]
	};

	return (
		<div className="chart">
			{isFetching && <div className="pl-3 p-5 m-5">Loading Chart...</div>}
			{!isFetching && <Line data={dataLine} options={options} />}
		</div>
	);
};
PricesChart.propTypes = {
	stockSymbol: PropTypes.string
};
