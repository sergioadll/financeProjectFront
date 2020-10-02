import React, { Component } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { LineChart } from "./lineChart";

export const Card = props => {
	const { stock } = props;
	const detailsUrl = "/details/".concat(stock.symbol);
	return (
		<div className="col-md-4">
			<div className="card mb-4 shadow-sm">
				<p className="card-text pl-3 pt-2">{stock.name}</p>
				<p className="card-text pl-3 pt-2">{stock.symbol}</p>
				<LineChart stockSymbol={stock.symbol} />
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							<Link to={detailsUrl} className="btn btn-sm btn-outline-secondary">
								View
							</Link>
							<button type="button" className="btn btn-sm btn-outline-secondary">
								Add to Watchlist
							</button>
						</div>
						<button type="button" className="btn btn-sm font-weight-bold btn-danger text-light">
							X
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	stock: PropTypes.object
};
