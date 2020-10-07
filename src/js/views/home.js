import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/home.scss";

import { AutoSearch } from "../component/autoSearch";
import { CreateWatchlist } from "../component/createWatchlist.js";
import { TabContent } from "../component/tabContent.js";

//crear condicional para cuando no hay watchlists

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [key, setKey] = useState();
	const [watchlistId, setWatchlistId] = useState(store.watchlists[0].id);
	const userWatchlists = store.watchlists.map((element, index) => {
		index = index + 1;
		return (
			<Tab
				key={index}
				eventKey={element.id}
				title={
					<span>
						{element.name}
						<Link
							to="/"
							className="ml-3 p-0 text-danger"
							variant="secondary"
							onClick={() => actions.deleteWatchlist(element.id)}>
							<i className="far fa-trash-alt" />
						</Link>
					</span>
				}>
				<TabContent watchlist={watchlistId.toString()} />
			</Tab>
		);
	});
	useEffect(
		() => {
			async function loadUserWatchlists() {
				if (store.token != null) {
					await actions.loadWatchlists();
					setWatchlistId(store.watchlists[0].id);
				}
			}
			loadUserWatchlists();
		},
		[store.token]
	);

	return (
		<section>
			<AutoSearch />
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={k => {
					setKey(k);
					setWatchlistId(k);
				}}>
				{userWatchlists}
				<Tab key="0" eventKey="0" title="+">
					<CreateWatchlist />
				</Tab>
			</Tabs>
		</section>
	);
};
