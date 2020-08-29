import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	return (
		<section className="">
			<form className="form-inline my-4 justify-content-center">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
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
