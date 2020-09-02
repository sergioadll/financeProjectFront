import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Context } from "../store/appContext";

export const DetailChart = () => {
	const { store, actions } = useContext(Context);
	if (store.Watchlist.s === "ok") {
		const dates = actions.createDateArray(store.Watchlist.t);
		//actions.createDateArray(store.Watchlist.t);
		//console.log(actions.createDateArray(store.Watchlist.t));
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
		const dataLine = {
			labels: dates,
			datasets: [
				{
					fill: false,
					label: ["Price"],
					data: store.Watchlist.c,
					borderColor: "#000000",
					backgroundColor: "#09cde3"
				}
			]
		};

		return (
			<div className="chart">
				<Line data={dataLine} />
				<Bar data={dataBar} />
				<div />
			</div>
		);
	} else {
		const dataLine = {
			labels: ["monday", "tuesday", "wednesday", "not", "notShow"],
			datasets: [
				{
					fill: false,
					label: ["Price"],
					data: [45234, 23452, 4234, 23452, 32423],
					borderColor: "#000000",
					backgroundColor: "#09cde3"
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
