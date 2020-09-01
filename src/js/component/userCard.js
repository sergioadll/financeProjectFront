import React, { Component } from "react";
import { LineChart } from "./lineChart";

export const UserCard = () => (
	<div className="col-md-10 justify-content-center">
		<div className="card mb-4 shadow-sm">
			<div className="card-body">
				<p className="card-text">User Information</p>
			</div>
			<div className="card-body">
				<p className="card-text">Name:Someone</p>
				<p className="card-text">Username: username123</p>
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
