import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Pagination from "react-bootstrap/Pagination";
import { Card } from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { pagState, setPagState } = useState("");
	return (
		<section className="">
			<div className="d-flex justify-content-center">
				<Pagination size="sm" className="">
					<Pagination.First />
					<Pagination.Prev />
					{store.watchlists.map((element, index) => {
						return (
							<Pagination.Item
								key={index}
								className={pagState}
								onClick={() => setPagState((pagState = "active"))}>
								{element.name}
							</Pagination.Item>
						);
					})}
					<Pagination.Item>+</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</div>
			<div className="card-group">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};
