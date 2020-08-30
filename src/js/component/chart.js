import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

export const Chart = () => {
	const dataBar = {
		labels: ["paris", "madrid", "costa rica", "londres"],
		datasets: [
			{
				label: ["population"],
				data: [45234, 23452, 4234, 23452],
				backgroundColor: ["rgb (233, 64, 28)", "rgb (12, 63, 138)", "rgb (233, 64, 28)", "rgb (12, 63, 138)"]
			}
		]
	};
	const dataLine = {
		labels: ["paris", "madrid", "costa rica", "londres"],
		datasets: [
			{
				label: ["population"],
				data: [45234, 23452, 4234, 23452],
				backgroundColor: [
					"rgba(255, 99, 132, 0.6)",
					"rgb (12, 63, 138)",
					"rgb (233, 64, 28)",
					"rgb (12, 63, 138)"
				]
			}
		]
	};

	return (
		<div className="chart">
			<Line data={dataLine} />
		</div>
	);
};
//<Bar data={dataBar} />
