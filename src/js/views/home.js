import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/home.scss";

import { Card } from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [key, setKey] = useState(1);
	const [content, setContent] = useState();

	// definit state segun documentacion

	// mostrar el primer watchlist por defecto

	// establecer la funcion que se llamará al hacer el onClick
	// para cargar el contenido del siguiente tab
	const watchlistContent = key => {
		// Obtener el contenido del watchlist correspondiente
		// al valor en element (fetch)
		const watchelements = store.watchlistStocks.map((element, index) => {
			return <div key={index}>{element.stock_symbol}</div>;
		});
		setContent(watchelements);
	};
	console.log(key, content);
	const watchlists = store.watchlists.map((element, index) => {
		/*const content*/

		return (
			<Tab key={element.id} eventKey={element.id} title={element.name}>
				{content}
			</Tab>
		);
	});

	return (
		<section className="">
			<Tabs
				defaultActiveKey={1}
				id="controlled-tab-example"
				activeKey={key}
				onSelect={k => (setKey(k), watchlistContent(k))}>
				{watchlists}
			</Tabs>
		</section>
	);
};
