import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

export const TabContent = props => {
	const { watchlist } = props;
	//console.log("tab content numero de watchlist", watchlistNum, typeof watchlistNum);
	const { store, actions } = useContext(Context);
	const [tabContent, setTabContent] = useState(
		store.watchlistStocks.map((element, index) => {
			return <div key={element.id}>{element.name}</div>;
		})
	);

	const loadTabContent = () => {
		const watchlistStocks = store.watchlistStocks.map((element, index) => {
			//setTabContent(<div key={element.id}>{element.name}</div>);
			console.log(store.watchlistStocks);
			console.log("stocks", element);
			//return <div key={element.id}>{element.name}</div>;
		});
	};

	useEffect(
		() => {
			if (store.token != null) {
				//console.log("llamando stocks de watchlist: ", watchlist);
				actions.loadStocksFromWatchlists(watchlist);
			}
			loadTabContent();
		},
		[watchlist]
	);
	//console.log("home stocks:   ", store.watchlistStocks);

	return tabContent;
};

TabContent.propTypes = {
	watchlist: PropTypes.string
};
