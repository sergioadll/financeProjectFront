import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [dropMenu, setDropMenu] = useState("collapse bg-dark");

	const changeMenu = () => {
		setShowMenu(showMenu => !showMenu);
		if (showMenu == true) {
			setDropMenu(dropMenu => "bg-dark");
		} else {
			setDropMenu(dropMenu => "collapse bg-dark");
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
								Add some information about the album below, the author, or any other background context.
								Make it a few sentences long so folks can pick up some informative tidbits. Then, link
								them off to some social networking sites or contact information.
							</p>
						</div>
						<div className="col-sm-4 offset-md-1 py-4">
							<h4 className="text-white">Contact</h4>
							<ul className="list-unstyled">
								<li>
									<a href="#" className="text-white">
										Follow on Twitter
									</a>
								</li>
								<li>
									<a href="#" className="text-white">
										Like on Facebook
									</a>
								</li>
								<li>
									<a href="#" className="text-white">
										Email me
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar navbar-dark bg-dark shadow-sm border-bottom border-primary">
				<div className="container d-flex justify-content-between">
					<a href="/" className="navbar-brand d-flex align-items-center">
						<i className="far fa-chart-bar" />
						<strong>finMATH</strong>
					</a>
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
					<div className="btn-group">
						<a href="/register" className="btn btn-outline-success">
							Log In
						</a>
						<a href="/register" className="btn btn-outline-success">
							Register
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
