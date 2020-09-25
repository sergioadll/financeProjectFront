import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CardGroup from "react-bootstrap/CardGroup";

import "../../styles/home.scss";

import { TabContent } from "../component/tabContent.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [key, setKey] = useState();

	//<TabContent watchlist={key} />
	const userWatchlists = store.watchlists.map((element, index) => {
		return (
			<Tab key={index} eventKey={element.id} title={element.name}>
				<CardGroup>
					<div>{element.name}</div>
				</CardGroup>
			</Tab>
		);
	});
	useEffect(
		() => {
			setKey();
		},
		[store.watchlists[0].id]
	);

	return (
		<section>
			{console.log("Dentro RETURN TABS first watchlist id", key)}
			<Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
				{userWatchlists}
			</Tabs>
		</section>
	);
};
