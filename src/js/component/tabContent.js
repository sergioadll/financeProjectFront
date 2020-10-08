import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import CardGroup from "react-bootstrap/CardGroup";

import { Card } from "../component/card.js";

//AÑADIR FADEIN() CSS

export const TabContent = props => {
	const { watchlist } = props;
	const { store, actions } = useContext(Context);

	const [tabContent, setTabContent] = useState(store.watchlistStocks);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(
		() => {
			async function loadTabContent() {
				if (store.token != null) {
					await actions.loadStocksFromWatchlists(watchlist);
					setTabContent(store.watchlistStocks);
					setIsFetching(false);
				} else {
					setTabContent(store.watchlistStocks);
					setIsFetching(false);
				}
			}
			loadTabContent();
			console.log("im rerendering this shit tabcontent");
			console.log(tabContent);
		},
		[watchlist],
		[store.watchlistStocks.length]
	);

	const cards = tabContent.map((element, index) => {
		return <Card key={element.id} stock={element} watchlist={watchlist} />;
	});

	return (
		<CardGroup>
			{isFetching && <h1>Loading your stocks...</h1>}
			{!isFetching && cards}
		</CardGroup>
	);
};

TabContent.propTypes = {
	watchlist: PropTypes.string
};
