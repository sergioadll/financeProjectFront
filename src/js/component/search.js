import React, { Component } from "react";
import "../../styles/search.scss";

export const Search = () => (
	<div className="card my-4 bg-light rounded-pill p-0 searchBg">
		<form className="form-inline my-2 justify-content-center">
			<input
				className="form-control mr-sm-2 col-9 rounded-pill"
				type="search"
				placeholder="Insert Stock Symbol"
				aria-label="Search"
			/>
			<button className="btn btn-outline-primary my-2 my-sm-0 rounded-pill" type="submit">
				Search
			</button>
		</form>
	</div>
);
