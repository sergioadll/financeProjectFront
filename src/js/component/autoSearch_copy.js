import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Autocomplete from "react-autocomplete";
import "../../styles/search.scss";

export const AutoSearch = () => {
	const { store, actions } = useContext(Context);

	const [value, setValue] = useState("");
	const debouncedSearchTerm = useDebounce(value, 500);
	const [results, setResults] = useState("");
	const [isFetching, setIsFetching] = useState(true);
	const [symbol, setSymbol] = useState("");

	useEffect(
		() => {
			async function loadChartData() {
				if (debouncedSearchTerm) {
					const stocks = await actions.loadStocksStartingWith(debouncedSearchTerm);
					setResults(stocks);
				} else {
					setResults("");
				}
				setIsFetching(false);
			}
			console.log("results", results);
			console.log("search", debouncedSearchTerm);
			loadChartData();
		},
		[debouncedSearchTerm]
	);
	return (
		<div className="d-flex justify-content-center">
			<div className="card mb-2 mt-3 bg-light rounded-pill p-0 searchBg on-top">
				<form className="form-inline my-1 d-flex justify-content-center">
					<div>
						<input
							placeholder="Insert Stock Name or Symbol"
							onChange={e => setValue(e.target.value)}
							onSelect={val => {
								setSymbol("/details/".concat(val));
								setValue(val);
							}}
						/>
						{isFetching && <div>Searching ...</div>}
						{results}
					</div>
					<Link
						to={symbol}
						className="btn btn-outline-primary my-sm-0 rounded-pill"
						id="submit"
						type="submit">
						Go!
					</Link>
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
/**
 					setResults(
						results.map((element, index) => (
							<div key={element.id}>
								{element.symbol}
								<span className="ml-auto">{element.name}</span>
							</div>
						))
 */
