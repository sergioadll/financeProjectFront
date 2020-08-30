import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { DetailCard } from "../component/detailCard.js";
import { Search } from "../component/search.js";

export const Profile = () => {
	return (
		<section>
			<div className="d-flex justify-content-center">
				<DetailCard />
			</div>
		</section>
	);
};
