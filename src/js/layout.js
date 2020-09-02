import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Search } from "./component/search.js";
import { Details } from "./views/details";
import { Profile } from "./views/profile";
import { Login } from "./views/login";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100 bg-white">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="d-flex justify-content-center">
						<Search />
					</div>

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/details" component={Details} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
