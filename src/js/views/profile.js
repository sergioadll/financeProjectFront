import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { UserCard } from "../component/userCard.js";

export const Profile = () => {
	return (
		<section>
			<div className="d-flex justify-content-center">
				<UserCard />
			</div>
		</section>
	);
};
