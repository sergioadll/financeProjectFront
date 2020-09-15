import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/home.scss";

import { Card } from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [key, setKey] = useState(1);

	// definit state segun documentacion

	// mostrar el primer watchlist por defecto

	// establecer la funcion que se llamará al hacer el onClick
	// para cargar el contenido del siguiente tab
	let content;
	const watchlistContent = key => {
		console.log(key);
		// Obtener el contenido del watchlist correspondiente
		// al valor en element (fetch)
		const content = (
			<div className="card-group">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	};

	const watchlists = store.watchlists.map((element, index) => {
		return (
			<Tab key={element.id} eventKey={element.id} title={element.name}>
				{content}
			</Tab>
		);
	});

	return (
		<section className="">
			<div className="d-flex justify-content-center">
				<Tabs
					defaultActiveKey={1}
					id="controlled-tab-example"
					activeKey={key}
					onSelect={k => watchlistContent(k)}>
					{watchlists}
				</Tabs>
			</div>
		</section>
	);
};
