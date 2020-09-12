import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
	return (
		<div className="col-md-12 d-flex justify-content-center">
			<div className="card col-md-10 mb-4 shadow-sm">
				<div className="card-body">
					<form className="form-signin">
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
						<div className="form-label-group">
							<label htmlFor="inputPassword">Confirm Password</label>
							<input
								type="password"
								id="inputPassword"
								className="form-control"
								placeholder="Confirm Password"
								required
							/>
						</div>
						<button className="btn btn-lg btn-primary btn-block mt-4" type="submit">
							Register
						</button>
						<p className="mt-3 text-muted text-center">&copy; 2020 - 2021</p>
					</form>
				</div>
			</div>
		</div>
	);
};
