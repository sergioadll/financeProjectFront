import React, { Component } from "react";
import { PricesChart } from "./pricesChart";
import { VolumeChart } from "./volumeChart";

export const DetailCard = () => (
	<div className="col-md-10 justify-content-center">
		<div className="card mb-4 shadow-sm">
			<div className="card-body" />
			<div className="d-flex justify-content-between align-items-center px-4">
				<p className="card-text">Stock name, last price, price variation, index</p>
				<div className="btn-group">
					<button type="button" className="btn btn-sm btn-outline-secondary">
						Analyze (Coming Soon...)
					</button>
					<button type="button" className="btn btn-sm btn-outline-secondary">
						Add to Watchlist
					</button>
				</div>
			</div>

			<PricesChart />
			<VolumeChart />

			<div className="card-body">
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
			</div>
		</div>
	</div>
);
