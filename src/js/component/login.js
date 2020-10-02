import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";

export const Login = () => {
	const { actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [user, setUser] = useState({ email: null, password: null });

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<ButtonGroup>
				<Button variant="btn btn-outline-success" onClick={handleShow}>
					Login
				</Button>
				<Link to="/register" className="btn btn-outline-success">
					Register
				</Link>
			</ButtonGroup>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="form-label-group">
						<label htmlFor="inputEmail">Email address</label>
						<input
							defaultValue=""
							onChange={e => {
								let newEmail = e.target.value;
								setUser(user => {
									return { ...user, email: newEmail };
								});
							}}
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
						/>
					</div>{" "}
					<div className="form-label-group">
						<label htmlFor="inputPassword">Password</label>
						<input
							defaultValue=""
							onChange={e => {
								let newPassword = e.target.value;
								setUser(user => {
									return { ...user, password: newPassword };
								});
							}}
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="success"
						onClick={() => {
							if (user.email != null && user.password != null) {
								setShow(false);
								actions.login(user.email, user.password);
							}
						}}>
						Login
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};
