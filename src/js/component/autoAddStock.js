import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import Autocomplete from "react-autocomplete";
import "../../styles/autoAddStock.scss";

export const AutoAddStock = () => {
	const { store, actions } = useContext(Context);
	const [watchlist, setWatchlist] = useState({ name: null, stock: null });

	const [value, setValue] = useState("");
	useEffect(() => {
		actions.loadStocksInfo();
	}, []);
	return (
		<form className="form-label-group">
			<div className="form-label-group">
				<label htmlFor="inputName">Name</label>
				<input
					type="name"
					id="inputName"
					className="form-control wide-search"
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
			<div className="form-label-group">
				<label htmlFor="inputLastName">Stocks</label>
				<br />
				<Autocomplete
					items={store.allStocks}
					getItemValue={item => item.symbol}
					shouldItemRender={(item, value) =>
						item.symbol.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
						item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
					}
					hideResults={true}
					renderItem={(item, isHighlighted) => (
						<div
							key={item.id}
							className="d-flex px-2"
							style={{ background: isHighlighted ? "lightgray" : "white" }}>
							{item.symbol}
							<span className="ml-auto">{item.name}</span>
						</div>
					)}
					value={value}
					onChange={e => setValue(e.target.value)}
					onSelect={e => {
						let newStock = e.target.value;
						setWatchlist(watchlist => {
							return { ...watchlist, stock: newStock };
						});
					}}
					menuStyle={{
						borderRadius: "0.1rem",
						boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
						background: "rgba(255, 255, 255, 1)",
						padding: "0,1rem 0",
						fontSize: "90%",
						position: "fixed",
						overflow: "auto",
						maxHeight: "20%",
						zindex: 10000
					}}
					inputProps={{
						placeholder: "Insert Stock Name or Symbol",
						className: "form-control",
						display: "none"
					}}
				/>
				<Link
					to="/"
					className="btn btn-lg btn-primary btn-block mt-4"
					id="register"
					type="submit"
					onClick={() => {
						console.log(watchlist);
					}}>
					Register
				</Link>
			</div>
		</form>
	);
};
