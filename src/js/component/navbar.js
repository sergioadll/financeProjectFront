import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Login } from "./login";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState(true);
	const [dropMenu, setDropMenu] = useState("collapse bg-dark");

	const changeMenu = () => {
		setShowMenu(showMenu => !showMenu);
		if (showMenu == true) {
			setDropMenu("bg-dark");
		} else {
			setDropMenu("collapse bg-dark");
		}
	};

	return (
		<header>
			<div className={dropMenu} id="navbarHeader">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 col-md-7 py-4">
							<h4 className="text-white">About</h4>
							<p className="text-muted">
								With finMATH, you will be able to keep track of your favourite stocks and make trading
								decisions based on chart analysis. Our next goal is to include machine learning
								algorithms to assist in your decision making process.
							</p>
						</div>
						<div className="col-sm-4 offset-md-1 py-4">
							<h4 className="text-white">Contact on LinkedIn</h4>
							<ul className="list-unstyled">
								<li>
									<a href="https://www.linkedin.com/in/sergiodiazl/" className="text-white">
										Sergio Diaz
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/%E2%99%98fernando-m-21162949/"
										className="text-white">
										Fernando Manrique
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar navbar-dark bg-dark shadow-sm border-bottom border-primary">
				<div className="container d-flex mx-0 px-0 ">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarHeader"
						aria-controls="navbarHeader"
						aria-expanded={showMenu}
						aria-label="Toggle navigation">
						<span
							className="navbar-toggler-icon"
							onClick={() => {
								changeMenu();
							}}
						/>
					</button>
					<Link to="/" className="navbar-brand d-flex align-items-center">
						<i className="far fa-chart-bar" />
						<strong>finMATH</strong>
					</Link>
					<div className="btn-group justify-content-end">
						<Login />
					</div>
				</div>
			</div>
		</header>
	);
};
