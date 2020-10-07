import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import { PricesChart } from "./pricesChart";
import { VolumeChart } from "./volumeChart";

export const DetailCard = props => {
	const { stockSymbol } = props;

	const { store, actions } = useContext(Context);

	const [stockInfo, setStockInfo] = useState("");
	const [isFetching, setIsFetching] = useState(true);
	const allWatchlists = store.watchlists.map((element, index) => {
		return (
			<Dropdown.Item
				key={index}
				onClick={() => {
					alert(stockSymbol + " added to " + element.name);
					actions.addStockToWatchlist(stockSymbol, element.id);
				}}>
				{element.name}
			</Dropdown.Item>
		);
	});

	useEffect(
		() => {
			async function loadStock() {
				const stock = await actions.loadStockInfo(stockSymbol);
				setStockInfo(stock);
				setIsFetching(false);
			}
			loadStock();
		},
		[stockSymbol]
	);
	return (
		<div className="col-md-10 justify-content-center">
			<div className="card mb-4 shadow-sm">
				<div className="card-body pt-0" />
				<div className="d-flex justify-content-between align-items-center px-4">
					<p className="card-text">
						<span className="mr-5">{stockInfo.name}</span>
						<span className="">{stockSymbol}</span>
					</p>
					<div className="btn-group">
						<Dropdown className="btn-group">
							<Link to="" className="btn btn-sm btn-outline-secondary">
								Analyze
							</Link>
							<Dropdown.Toggle variant="outline-secondary" className="btn btn-sm" id="dropdown-basic">
								Add to watchlist
							</Dropdown.Toggle>

							<Dropdown.Menu>{allWatchlists}</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>

				<PricesChart stockSymbol={stockSymbol} />
				<VolumeChart stockSymbol={stockSymbol} />

				<div className="card-body">
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
				</div>
			</div>
		</div>
	);
};
DetailCard.propTypes = {
	stockSymbol: PropTypes.string
};
