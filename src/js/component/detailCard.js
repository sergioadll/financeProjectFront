import React, { Component } from "react";
import { LineChart } from "./lineChart";

export const DetailCard = () => (
	<div className="col-md-10 justify-content-center">
		<div className="card mb-4 shadow-sm">
			<div className="card-body">
				<p className="card-text">Stock name, last price, price variation, index</p>
			</div>
			<LineChart />
			<div className="card-body">
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
				<div className="d-flex justify-content-between align-items-center">
					<div className="btn-group">
						<button type="button" className="btn btn-sm btn-outline-secondary">
							View
						</button>
						<button type="button" className="btn btn-sm btn-outline-secondary">
							Add to Watchlist
						</button>
					</div>
					<small className="text-muted">9 mins</small>
				</div>
			</div>
		</div>
	</div>
);
