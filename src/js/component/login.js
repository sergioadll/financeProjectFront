import React, { Component } from "react";

export const Login = () => {
	console.log("login");
	return (
		<div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Log In</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
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
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Login
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
