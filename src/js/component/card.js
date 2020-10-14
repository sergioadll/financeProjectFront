import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { LineChart } from "./lineChart";

import Dropdown from "react-bootstrap/Dropdown";

import "../../styles/card.scss";

export const Card = props => {
	const { stock, watchlist } = props;
	const { store, actions } = useContext(Context);

	const detailsUrl = "/details/".concat(stock.symbol);
	const allWatchlists = store.watchlists.map((element, index) => {
		return (
			<Dropdown.Item
				key={index}
				onClick={() => {
					if (store.token != null) {
						alert(stock.symbol + " added to " + element.name);
						actions.addStockToWatchlist(stock.symbol, element.id);
					} else {
						alert("Please, login or register to modify a watchlist");
					}
				}}>
				{element.name}
			</Dropdown.Item>
		);
	});
	return (
		<div className="col-md-4" id={stock.id}>
			<div className="card mb-4 mt-1 shadow">
				<p className="card-text pl-3 pt-2">{stock.name}</p>
				<p className="card-text pl-3 pt-2">{stock.symbol}</p>
				<LineChart stockSymbol={stock.symbol} />
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-center">
						<Dropdown className="btn-group">
							<Link to={detailsUrl} className="btn btn-sm btn-outline-secondary">
								View
							</Link>
							<Dropdown.Toggle variant="outline-secondary" className="btn btn-sm" id="dropdown-basic">
								Add to watchlist
							</Dropdown.Toggle>

							<Dropdown.Menu>{allWatchlists}</Dropdown.Menu>
						</Dropdown>
						<Link
							to=""
							type="button"
							className="text-danger"
							onClick={() => {
								if (store.token != null) {
									alert(stock.name + " deleted from this watchlist");
									actions.deleteStockFromWatchlist(watchlist, stock.symbol);
								} else {
									alert("Please, login or register to modify a watchlist");
								}
							}}>
							<i className="fas fa-times fa-2x" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	stock: PropTypes.object,
	watchlist: PropTypes.string
};
