import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

import { Card } from "../component/card.js";

export const TabContent = props => {
	const { watchlist } = props;
	const { store, actions } = useContext(Context);

	const [tabContent, setTabContent] = useState(
		store.watchlistStocks.map((element, index) => {
			return <Card key={element.id} stock={element} />;
		})
	);
	useEffect(
		() => {
			async function loadTabContent() {
				if (store.token != null) {
					await actions.loadStocksFromWatchlists(watchlist);
					setTabContent(
						store.watchlistStocks.map((element, index) => {
							console.log(element.name);
							return <Card key={element.id} stocks={element} />;
						})
					);
				}
			}
			loadTabContent();
		},
		[watchlist]
	);

	return tabContent;
};

TabContent.propTypes = {
	watchlist: PropTypes.string
};
