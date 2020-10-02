import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import "../../styles/home.scss";
import { Card } from "../component/card.js";
import { DetailCard } from "../component/detailCard.js";

export const Details = prop => {
	const stockSymbol = prop.match.params.symbol;

	//console.log("stockinfo", prop);
	return (
		<section>
			<div className="d-flex justify-content-center">
				<DetailCard stockSymbol={stockSymbol} />
			</div>
		</section>
	);
};
/*Details.propTypes = {
	stockInfo: PropTypes.object
};*/
