import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/home.scss";

import { Card } from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [key, setKey] = useState(store.watchlists[0].id);
	const [content, setContent] = useState(
		store.watchlistStocks.map((element, index) => {
			//console.log("home. stocks",element.stock_symbol);
			return <div key={index}>{element.name}</div>;
		})
	);

	const watchlistContent = key => {
		console.log("home stocks:   ", store.watchlistStocks);
		const watchlistStocks = store.watchlistStocks.map((element, index) => {
			return <div key={element.id}>{element.name}</div>;
		});
		setContent(watchlistStocks);
	};

	const userWatchlists = store.watchlists.map((element, index) => {
		if (store.token != "") {
			//setKey(store.watchlists[0].id);
			//actions.loadStocksFromWatchlists(4);
		}
		return (
			<Tab key={element.id} eventKey={element.id} title={element.name}>
				{content}
			</Tab>
		);
	});
	return (
		<section>
			<Tabs
				defaultActiveKey="1"
				id="controlled-tab-example"
				activeKey={key}
				/*onSelect={k => (setKey(k), watchlistContent(k))}*/
			>
				{userWatchlists}
			</Tabs>
		</section>
	);

	//CON MARCO

	/*
	// definit state segun documentacion

	// mostrar el primer watchlist por defecto

	// establecer la funcion que se llamará al hacer el onClick
	// para cargar el contenido del siguiente tab
	const watchlistContent = watchlist_id => {
		// Obtener el contenido del watchlist correspondiente
		// al valor en element (fetch)
		const watchelements = store.watchlistStocks.map((element, index) => {
			return (
				<div key={index}>
					Stock Symbol:
					{element.stock_symbol}
				</div>
			);
		});
		setContent(watchelements);
	};
	//console.log(key, content);
	const watchlists = store.watchlists.map((element, index) => {
		/*const content

		return (
			<Tab key={element.id} eventKey={element.id} title={element.name}>
				{content}
			</Tab>
		);
	});

	return (
		<section className="">
			<Tabs
				defaultActiveKey="1"
				id="controlled-tab-example"
				activeKey={key}
				onSelect={k => (setKey(k), watchlistContent(k))}>
				{watchlists}
			</Tabs>
		</section>
	);*/
};
