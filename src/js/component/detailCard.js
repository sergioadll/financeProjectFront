import React, { Component } from "react";

export const DetailCard = () => (
	<div className="col-md-10 justify-content-center">
		<div className="card mb-4 shadow-sm">
			<div className="card-body">
				<p className="card-text">Stock name, last price, price variation, index</p>
			</div>
			<svg
				className="bd-placeholder-img card-img-top"
				width="100%"
				height="300"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid slice"
				focusable="false"
				role="img"
				aria-label="Placeholder: Thumbnail">
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#55595c" />
				<text x="50%" y="50%" fill="#eceeef" dy=".3em">
					Chart
				</text>
			</svg>
			<div className="card-body">
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
				<div className="d-flex justify-content-between align-items-center">
					<div className="btn-group">
						<button type="button" className="btn btn-sm btn-outline-secondary">
							View
						</button>
						<button type="button" className="btn btn-sm btn-outline-secondary">
							Edit
						</button>
					</div>
					<small className="text-muted">9 mins</small>
				</div>
			</div>
		</div>
	</div>
);
