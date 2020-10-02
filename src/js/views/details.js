import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import "../../styles/home.scss";
import { Card } from "../component/card.js";
import { DetailCard } from "../component/detailCard.js";

export const Details = props => {
	const { stockInfo } = props;

	console.log("stockinfo", props);
	return (
		<section>
			<div className="d-flex justify-content-center">
				<DetailCard />
			</div>
		</section>
	);
};
Details.propTypes = {
	stockInfo: PropTypes.object
};
