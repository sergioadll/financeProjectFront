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
	//chequear parámetro que se le pasa al tab content;
	const userWatchlists = store.watchlists.map((element, index) => {
		return (
			<Tab key={index} eventKey={element.id} title={element.name}>
				<CardGroup>
					<TabContent watchlist={key} />
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
			<Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
				{userWatchlists}
			</Tabs>
		</section>
	);
};
