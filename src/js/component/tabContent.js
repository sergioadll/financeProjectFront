import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import CardGroup from "react-bootstrap/CardGroup";

import { Card } from "../component/card.js";

export const TabContent = props => {
	const { watchlist } = props;
	const { store, actions } = useContext(Context);

	const [tabContent, setTabContent] = useState(store.watchlistStocks);

	useEffect(
		() => {
			async function loadTabContent() {
				if (store.token != null) {
					await actions.loadStocksFromWatchlists(watchlist);
					setTabContent(store.watchlistStocks);
				}
			}
			loadTabContent();
		},
		[watchlist]
	);
	console.log("tabContent", tabContent, typeof tabContent);

	const cards = tabContent.map((element, index) => {
		console.log(element);
		//debugger;
		return <Card key={element.id} stock={element} />;
	});

	return <CardGroup>{cards}</CardGroup>;
};

TabContent.propTypes = {
	watchlist: PropTypes.string
};
