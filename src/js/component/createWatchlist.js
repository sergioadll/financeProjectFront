import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/autoAddStock.scss";

export const CreateWatchlist = () => {
	const { store, actions } = useContext(Context);
	const [watchlist, setWatchlist] = useState({ name: null, stock: null });
	const [value, setValue] = useState("");
	const debouncedValue = useDebounce(value, 500);
	const [results, setResults] = useState("");
	const [isFetching, setIsFetching] = useState(false);
	const [search, setSearch] = useState(true);
	useEffect(
		() => {
			async function loadChartData() {
				let res = null;
				let searchValue = debouncedValue.replaceAll("/", " ");
				searchValue = debouncedValue.trim();
				if (searchValue != "" && search) {
					setIsFetching(true);
					console.log(searchValue);
					const stocks = await actions.loadStocksStartingWith(searchValue);
					if (stocks.length != 0) {
						res = await stocks.map((element, index) => (
							<div
								key={element.id}
								className="d-flex px-2"
								onClick={e => {
									setSearch(false);
									setValue(element.name);
									setWatchlist(watchlist => {
										console.log(element.symbol);
										return { ...watchlist, stock: element.symbol };
									});
								}}>
								{element.symbol}
								<span className="ml-auto">{element.name}</span>
							</div>
						));
					} else {
						res = <div>Not found...</div>;
					}
					setResults(
						<div className="">
							<div className="d-flex px-2 legend ">
								Symbol
								<span className="ml-auto">Name</span>
							</div>
							{res}
						</div>
					);
					setIsFetching(false);
				} else {
					setResults("");
				}
			}
			loadChartData();
		},
		[debouncedValue]
	);
	return (
		<div className="col-md-12 d-flex justify-content-center wide-box">
			<div className="card col-md-10 mb-4 shadow-sm ">
				<div className="card-body">
					<form className="form-signin">
						<div className="text-center mb-4">
							<h1 className="h3 mb-3 font-weight-normal">Add Watchlist</h1>
						</div>
						<div className="form-label-group">
							<label htmlFor="inputName">Name</label>
							<input
								type="name"
								id="inputName"
								className="form-control wide-form"
								placeholder="Name"
								required
								autoFocus
								onChange={e => {
									let newName = e.target.value;
									setWatchlist(watchlist => {
										return { ...watchlist, name: newName };
									});
								}}
							/>
						</div>
						<div className="form-label-group autocomplete">
							<label htmlFor="inputLastName">Stock</label>
							<br />
							<input
								value={value}
								placeholder="Insert Stock Name or Symbol"
								className="form-control wide-form"
								onChange={e => {
									setValue(e.target.value);
									setSearch(true);
								}}
							/>
							{isFetching && <div>Searching ...</div>}
							<div className="searchDropdown">{results}</div>
						</div>
						<Link
							to="/"
							className="btn btn-lg btn-primary btn-block mt-4 wide-form"
							id="register"
							type="submit"
							onClick={() => {
								if (watchlist.name != null && watchlist.stock != null && store.token != null) {
									actions.addWatchlist(watchlist);
									setValue("");
									document.getElementById("inputName").value = "";
								} else if (store.token == null) {
									alert("Please, login or register to add a watchlist!");
								}
							}}>
							Add
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
	function useDebounce(value, delay) {
		const [debouncedValue, setDebouncedValue] = useState(value);
		useEffect(
			() => {
				const handler = setTimeout(() => {
					setDebouncedValue(value);
				}, delay);
				return () => {
					clearTimeout(handler);
				};
			},
			[value, delay] // Only re-call effect if value or delay changes
		);
		return debouncedValue;
	}
};
