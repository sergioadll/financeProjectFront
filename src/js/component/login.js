import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [user, setUser] = useState({ email: null, password: null });
	const [login, setLogin] = useState(
		<ButtonGroup>
			<Link to="/register" className="btn btn-outline-success text-light">
				Register
			</Link>
			<Button
				variant="btn btn-outline-success text-light"
				onClick={() => {
					handleShow();
				}}>
				Login
			</Button>
		</ButtonGroup>
	);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(
		() => {
			if (store.userInfo != "") {
				setLogin(
					<ButtonGroup>
						<Link to="/" className="btn btn-outline-success text-light">
							{store.userInfo}
						</Link>
						<Button
							variant="btn btn-outline-danger text-light"
							onClick={() => {
								window.location.reload();
							}}>
							Logout
						</Button>
					</ButtonGroup>
				);
			}
		},
		[store.userInfo]
	);

	return (
		<Container>
			{login}
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
