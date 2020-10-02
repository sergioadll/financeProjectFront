import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Context } from "../store/appContext";

export const PricesChart = () => {
	const { store, actions } = useContext(Context);
	if (store.Watchlist.s === "ok") {
		const dates = actions.createDateArray(store.Watchlist.t);
		//actions.createDateArray(store.Watchlist.t);
		console.log(actions.createDateArray(store.Watchlist.t));
		const optionsPrice = {
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
		const dataLine = {
			labels: dates,
			datasets: [
				{
					fill: false,
					label: ["Price"],
					data: store.Watchlist.c,
					borderColor: "#000000",
					backgroundColor: "#2493ed"
				}
			]
		};

		return (
			<div className="chart">
				<Line data={dataLine} options={optionsPrice} />
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
					borderColor: "#000000",
					backgroundColor: "#2493ed"
				}
			]
		};

		return (
			<div className="chart">
				<Line data={dataLine} />
				<div />
			</div>
		);
	}
};
