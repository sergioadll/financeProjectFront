import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Autocomplete from "react-autocomplete";
import "../../styles/autoAddStock.scss";

export const CreateWatchlist = () => {
	const { store, actions } = useContext(Context);
	const [watchlist, setWatchlist] = useState({ name: null, stock: null });
	const [value, setValue] = useState("");
	useEffect(() => {
		actions.loadStocksInfo();
	}, []);
	return (
		<div className="col-md-12 mt-1 d-flex justify-content-center wide-box">
			<div className="card col-md-10 mb-4 shadow-sm">
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
								onSelect={val => {
									setWatchlist(watchlist => {
										console.log(val);
										return { ...watchlist, stock: val };
									});
									setValue(val);
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
									className: "form-control wide-form",
									display: "none"
								}}
							/>
							<Link
								to="/"
								className="btn btn-lg btn-primary btn-block mt-4 wide-form"
								id="register"
								type="submit"
								onClick={() => {
									if (watchlist.name != null && watchlist.stock != null) {
										console.log("ok");
									}
									console.log(watchlist);
								}}>
								Add
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
