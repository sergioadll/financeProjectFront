import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import "../../styles/home.scss";
import { AutoSearch } from "../component/autoSearch";
import { Card } from "../component/card.js";
import { DetailCard } from "../component/detailCard.js";

export const Details = prop => {
	const stockSymbol = prop.match.params.symbol;
	useEffect(() => {
		//setTimeout(window.scrollBy(0, 200), 10000); //to scroll after some time
		//window.scrollBy(0, 200); //to scroll down when loaded
		//something that makes detailcard rerender
	}, [stockSymbol]);
	return (
		<section>
			<AutoSearch />
			<div className="d-flex justify-content-center">
				<DetailCard stockSymbol={stockSymbol} />
			</div>
		</section>
	);
};
/*Details.propTypes = {
	stockInfo: PropTypes.object
};*/
