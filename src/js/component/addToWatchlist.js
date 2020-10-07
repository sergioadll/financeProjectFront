import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const AddToWatchlist = () => {
	const { actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [user, setUser] = useState({ email: null, password: null });

	return (
		<Container>
			<Dropdown.Toggle variant="outline-secondary" className="btn btn-sm" id="dropdown-basic">
				Dropdown Button
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Container>
	);
};
//<Modal show={show} onHide={handleClose}>
