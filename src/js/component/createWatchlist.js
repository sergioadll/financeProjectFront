import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";

export const CreateWatchlist = () => {
	const { actions } = useContext(Context);
	const [user, setUser] = useState({ email: null, password: null });

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="col-md-12 d-flex justify-content-center">
			<div className="card col-md-10 mb-4 shadow-sm">
				<div className="card-body">
					<form
						className="form-signin"
						//action="/newaccount"
						onInput={() => {
							confirmPassword.setCustomValidity(
								confirmPassword.value != inputPassword.value ? "Passwords do not match" : ""
							);
						}}>
						<div className="text-center mb-4">
							<h1 className="h3 mb-3 font-weight-normal">Add Watchlist</h1>
						</div>
						<div className="form-label-group">
							<label htmlFor="inputName">Name</label>
							<input
								type="name"
								id="inputName"
								className="form-control"
								placeholder="Name"
								required
								autoFocus
								onChange={e => {
									let newName = e.target.value;
									setUser(user => {
										return { ...user, name: newName };
									});
								}}
							/>
						</div>
						<div className="form-label-group">
							<label htmlFor="inputLastName">Stocks</label>
							<input
								type="stocks"
								id="stocks"
								className="form-control"
								placeholder="Stocks"
								required
								autoFocus
								onChange={e => {
									let newLastName = e.target.value;
									setUser(user => {
										return { ...user, last_name: newLastName };
									});
								}}
							/>
						</div>
						<button
							className="btn btn-lg btn-primary btn-block mt-4"
							type="submit"
							onClick={() => {
								//console.log("click", user);
								if (
									user.email != null &&
									user.name != null &&
									user.last_name != null &&
									user.password != null
								) {
									console.log(
										"registro",
										typeof user.email,
										user.email,
										typeof user.name,
										user.name,
										typeof user.last_name,
										user.last_name,
										typeof user.password,
										user.password
									);
									actions.register(user.email, user.name, user.last_name, user.password);
								}
							}}>
							Register
						</button>
						<p className="mt-3 text-muted text-center">&copy; finMATH 2020 - 2021</p>
					</form>
				</div>
			</div>
		</div>
	);
};
