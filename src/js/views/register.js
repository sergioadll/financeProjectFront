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
							<h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
						</div>
						<div className="form-label-group">
							<input
								type="name"
								id="inputName"
								className="form-control"
								placeholder="Name"
								required
								autoFocus
							/>
							<label htmlFor="inputName">Name</label>
						</div>
						<div className="form-label-group">
							<input
								type="email"
								id="inputEmail"
								className="form-control"
								placeholder="Email address"
								required
								autoFocus
							/>
							<label htmlFor="inputEmail">Email address</label>
						</div>{" "}
						<div className="form-label-group">
							<input
								type="password"
								id="inputPassword"
								className="form-control"
								placeholder="Password"
								required
							/>
							<label htmlFor="inputPassword">Password</label>
						</div>
						<div className="form-label-group">
							<input
								type="password"
								id="inputPassword"
								className="form-control"
								placeholder="Confirm Password"
								required
							/>
							<label htmlFor="inputPassword">Confirm Password</label>
						</div>
						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Register
						</button>
						<p className="mt-3 text-muted text-center">&copy; 2020 - 2021</p>
					</form>
				</div>
			</div>
		</div>
	);
};
