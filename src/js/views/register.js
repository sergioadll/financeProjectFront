import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = () => {
	const { actions } = useContext(Context);
	const [user, setUser] = useState({ email: null, name: null, last_name: null, password: null });
	const registerUser = () => {
		if (
			confirmPassword.value === inputPassword.value &&
			user.email != null &&
			user.name != null &&
			user.last_name != null &&
			user.password != null
		) {
			actions.register(user.email, user.name, user.last_name, user.password);
		}
	};

	return (
		<div className="col-md-12 d-flex justify-content-center">
			<div className="card col-md-10 mb-4 shadow-sm">
				<div className="card-body">
					<form
						className="form-signin"
						//action="/home"
						onInput={() => {
							confirmPassword.setCustomValidity(
								confirmPassword.value != inputPassword.value ? "Passwords do not match" : "Match"
							);
						}}>
						<div className="text-center mb-4">
							<h1 className="h3 mb-3 font-weight-normal">Register</h1>
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
							<label htmlFor="inputLastName">Last Name</label>
							<input
								type="last_name"
								id="inputLastName"
								className="form-control"
								placeholder="Last Name"
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
						<div className="form-label-group">
							<label htmlFor="inputEmail">Email address</label>
							<input
								type="email"
								id="inputEmail"
								className="form-control"
								placeholder="Email address"
								required
								autoFocus
								onChange={e => {
									let newEmail = e.target.value;
									setUser(user => {
										return { ...user, email: newEmail };
									});
								}}
							/>
						</div>{" "}
						<div className="form-label-group">
							<label htmlFor="inputPassword">Password</label>
							<input
								type="password"
								id="inputPassword"
								name="ip"
								className="form-control"
								placeholder="Password"
								required
							/>
						</div>
						<div className="form-label-group">
							<label htmlFor="confirmPassword">Confirm Password</label>
							<input
								type="password"
								id="confirmPassword"
								name="cp"
								className="form-control"
								placeholder="Confirm Password"
								required
								onChange={e => {
									let newPassword = e.target.value;
									setUser(user => {
										return { ...user, password: newPassword };
									});
								}}
							/>
						</div>
						<Link
							to="/"
							className="btn btn-lg btn-primary btn-block mt-4"
							id="register"
							type="submit"
							onClick={() => {
								registerUser();
							}}>
							Register
						</Link>
						<p className="mt-3 text-muted text-center">&copy; finMATH 2020 - 2021</p>
					</form>
				</div>
			</div>
		</div>
	);
};
