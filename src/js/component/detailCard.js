import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { PricesChart } from "./pricesChart";
import { VolumeChart } from "./volumeChart";

export const DetailCard = props => {
	const { stockSymbol } = props;

	const { store, actions } = useContext(Context);

	const [stockInfo, setStockInfo] = useState("");
	const [isFetching, setIsFetching] = useState(true);

	useEffect(
		() => {
			async function loadStock() {
				const stock = await actions.loadStockInfo(stockSymbol);
				setStockInfo(stock);
				setIsFetching(false);
			}
			loadStock();
			console.log(stockInfo);
		},
		[stockSymbol]
	);
	//console.log(stockInfo);
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
						<button type="button" className="btn btn-sm btn-outline-secondary">
							Analyze (Coming Soon...)
						</button>
						<button type="button" className="btn btn-sm btn-outline-secondary">
							Add to Watchlist
						</button>
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
