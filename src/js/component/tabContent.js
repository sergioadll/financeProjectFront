import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

export const TabContent = props => {
	const { watchlist } = props;
	const { store, actions } = useContext(Context);

	const [tabContent, setTabContent] = useState(
		store.watchlistStocks.map((element, index) => {
			return <div key={element.id}>{element.name}</div>;
		})
	);
	useEffect(
		() => {
			async function loadTabContent() {
				if (store.token != null) {
					await actions.loadStocksFromWatchlists(watchlist);
					setTabContent(
						store.watchlistStocks.map((element, index) => {
							return <div key={element.id}>{element.name}</div>;
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
