import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import "../../styles/search.scss";

export const AutoSearch = () => {
	const { store, actions } = useContext(Context);

	const [value, setValue] = useState("");
	const debouncedValue = useDebounce(value, 500);
	const [results, setResults] = useState("");
	const [isFetching, setIsFetching] = useState(false);
	const [url, setUrl] = useState("");
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
									setUrl("/details/".concat(element.symbol));
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
		<div className="d-flex justify-content-center">
			<div className="card mb-4 mt-4 bg-light rounded-pill p-0 searchBg">
				<form className="form-inline my-1 d-flex justify-content-center">
					<div className="on-top">
						<input
							value={value}
							placeholder="Insert Stock Name or Symbol"
							className="search mr-sm-2 p-2 rounded-pill searchDropdown"
							onChange={e => {
								setValue(e.target.value);
								setSearch(true);
							}}
						/>
						<Link
							to={url}
							className="btn btn-outline-primary mb-1 my-sm-0 rounded-pill"
							id="submit"
							type="submit">
							Go!
						</Link>{" "}
						{isFetching && <div>Searching ...</div>}
						<div className="searchDropdown">{results}</div>
					</div>
				</form>
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
