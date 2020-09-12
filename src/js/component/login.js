import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";

export const Login = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<ButtonGroup>
				<Button variant="btn btn-outline-success" onClick={handleShow}>
					Login
				</Button>
				<a href="/register" className="btn btn-outline-success">
					Register
				</a>
			</ButtonGroup>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="form-label-group">
						<label htmlFor="inputEmail">Email address</label>
						<input
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
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						Login
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};
