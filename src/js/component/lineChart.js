import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export const LineChart = () => {
	const dataBar = {
		type: "line",
		labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
		datasets: [
			{
				type: "bar",
				label: ["Volume"],
				data: [3234, 4452, 1434, 2252, 6434],
				backgroundColor: "#EC932F"
			},
			{
				type: "line",
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
			<Bar data={dataBar} />
		</div>
	);
};
