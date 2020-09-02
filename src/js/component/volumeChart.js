import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Context } from "../store/appContext";

export const VolumeChart = () => {
	const { store, actions } = useContext(Context);
	if (store.Watchlist.s === "ok") {
		const dates = actions.createDateArray(store.Watchlist.t);
		//actions.createDateArray(store.Watchlist.t);
		//console.log(actions.createDateArray(store.Watchlist.t));
		const optionsVolume = {
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

		const dataBar = {
			labels: dates,
			datasets: [
				{
					type: "bar",
					label: ["Volume"],
					data: store.Watchlist.v,
					backgroundColor: "#EC932F"
				}
			]
		};

		return (
			<div className="chart">
				<Bar data={dataBar} options={optionsVolume} />
				<div />
			</div>
		);
	} else {
		return <div className="chart">Loading Volumes...</div>;
	}
};
