import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Autocomplete from "react-autocomplete";
import "../../styles/search.scss";

export const AutoSearch = () => {
	const { store, actions } = useContext(Context);

	const [value, setValue] = useState("");
	const [symbol, setSymbol] = useState("");
	useEffect(() => {
		actions.loadStocksInfo();
	}, []);
	return (
		<div className="card my-4 bg-light rounded-pill p-0 searchBg">
			<form className="form-inline my-2 justify-content-center">
				<Autocomplete
					items={store.allStocks}
					getItemValue={item => item.symbol}
					shouldItemRender={(item, value) => item.symbol.toLowerCase().indexOf(value.toLowerCase()) > -1}
					renderItem={(item, isHighlighted) => (
						<div key={item.id} style={{ background: isHighlighted ? "lightgray" : "white" }}>
							{item.symbol}
						</div>
					)}
					value={value}
					onChange={e => setValue(e.target.value)}
					onSelect={val => {
						setSymbol("/details/".concat(val));
						setValue(val);
					}}
					className="form-control mr-sm-2 col-9 rounded-pill"
					inputProps={{
						placeholder: "Insert Stock Symbol"
					}}
				/>
				<Link
					to={symbol}
					className="btn btn-outline-primary my-2 my-sm-0 rounded-pill"
					id="submit"
					type="submit">
					Go!
				</Link>
			</form>
		</div>
	);
};
