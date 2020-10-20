import { encode } from "base-64";

const urlBase = "https://3000-e3d7b37e-ec61-4085-bceb-2b603bfcfb6c.ws-eu01.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			userInfo: "",
			stockChart: {},
			watchlists: [{ id: -1, name: "Short-term" }],
			watchlistStocks: [
				{
					id: 13972,
					name: "APPLE INC",
					symbol: "AAPL"
				},
				{
					id: 17992,
					name: "INTL BUSINESS MACHINES CORP",
					symbol: "IBM"
				},
				{
					id: 23342,
					name: "TESLA INC",
					symbol: "TSLA"
				}
			],
			allStocks: []
		},
		actions: {
			register: async (email, name, last_name, password) => {
				console.log(name);
				const urlLogin = urlBase.concat("/register");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify({
						email: email,
						name: name,
						last_name: last_name,
						password: password
					}),
					redirect: "follow"
				};
				try {
					let res = await fetch(urlLogin, requestOptions);
					let result = await res.text();
					console.log("User Registered", result);
					getActions().login(email, password);
				} catch (error) {
					console.log("error", error);
				}
			},
			login: async (email, password) => {
				const urlLogin = urlBase.concat("/login");

				var headers = new Headers();
				let base64 = require("base-64");
				headers.set("Authorization", "Basic " + base64.encode(email + ":" + password));

				var requestOptions = {
					method: "POST",
					headers: headers,
					redirect: "follow"
				};
				try {
					let res = await fetch(urlLogin, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let token = await result;
					setStore({ token: token.token });
					setStore({ userInfo: email });
				} catch (error) {
					console.log("error", error);
				}
			},
			//ACTIONS TO GET DATA FROM OUR API
			loadWatchlists: async () => {
				const urlWatchlists = urlBase.concat("/user/watchlist");
				var myHeaders = new Headers();
				const token = getStore().token;
				myHeaders.append("X-Access-Tokens", token);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				try {
					let res = await fetch(urlWatchlists, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let watchlists = await result;
					setStore({ watchlists: watchlists });
					//add conditional fi watchlist empty
				} catch (error) {
					console.log("error", error);
				}
			},
			loadStocksFromWatchlists: async watchlist_id => {
				const urlExt = "/watchlist/".concat(watchlist_id.toString());
				//acortar concats a una linea
				const urlWatchelement = urlBase.concat(urlExt);

				var myHeaders = new Headers();
				const token = getStore().token;
				myHeaders.append("X-Access-Tokens", token);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				try {
					if (watchlist_id > 0) {
						let res = await fetch(urlWatchelement, requestOptions);
						let result = await res.json();
						let active = await setStore({});
						let stocks = await result;
						setStore({ watchlistStocks: stocks });
						//console.log("store stocks:    ", stocks);
					}
				} catch (error) {
					console.log("error", error);
				}
			},

			// ACTIONS TO CONVERT BETWEEN DATE AND EPOCH
			convertEpochDate: epoch => {
				var myDate = new Date(epoch * 1000);
				var date = myDate.toGMTString().slice(4, -12);
				return date;
			},
			createDateArray: stockDates => {
				let date = [];
				stockDates.map((element, index) => {
					date[index] = getActions().convertEpochDate(element);
				});
				return date;
			},
			convertTimeEpoch: date => {
				const time = Math.round(new Date().getTime() / 1000.0);
				return time;
			},
			//ACTIONS TO ADD/MODIFY WATCHLISTS
			addWatchlist: async watchlist => {
				const urlExt = "/watchlist";
				const urlWatchelement = urlBase.concat(urlExt);

				var myHeaders = new Headers();
				const token = getStore().token;
				myHeaders.append("X-Access-Tokens", token);
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify({ name: watchlist.name, stock: watchlist.stock }),
					redirect: "follow"
				};

				try {
					let res = await fetch(urlWatchelement, requestOptions);
					let result = await res.text();
					console.log(result);
					getActions().loadWatchlists();
				} catch (error) {
					console.log("error", error);
				}
			},
			deleteWatchlist: async watchlist_id => {
				const urlExt = "/watchlist/".concat(watchlist_id);
				const urlWatchelement = urlBase.concat(urlExt);

				var myHeaders = new Headers();
				const token = getStore().token;
				myHeaders.append("X-Access-Tokens", token);
				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					redirect: "follow"
				};

				try {
					let res = await fetch(urlWatchelement, requestOptions);
					let result = await res.text();
					console.log(result);
					getActions().loadWatchlists();
				} catch (error) {
					console.log("error", error);
				}
			},
			addStockToWatchlist: async (symbol, watchlist_id) => {
				const urlExt = "/watchlist/".concat(watchlist_id);
				const urlWatchelement = urlBase.concat(urlExt);

				var myHeaders = new Headers();
				const token = getStore().token;
				myHeaders.append("X-Access-Tokens", token);
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: JSON.stringify({ stock: symbol }),
					redirect: "follow"
				};

				try {
					let res = await fetch(urlWatchelement, requestOptions);
					let result = await res.text();
					console.log(result);
					getActions().loadWatchlists();
				} catch (error) {
					console.log("error", error);
				}
			},
			deleteStockFromWatchlist: async (watchlist_id, stock_symbol) => {
				const urlExt = "/watchlist/".concat(watchlist_id, "/", stock_symbol);
				const urlWatchelement = urlBase.concat(urlExt);

				var myHeaders = new Headers();
				const token = getStore().token;
				myHeaders.append("X-Access-Tokens", token);
				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					redirect: "follow"
				};
				try {
					let res = await fetch(urlWatchelement, requestOptions);
					let result = await res.text();
					console.log(result);
					const newStocks = getStore().watchlistStocks.filter(stocks => stocks.symbol != stock_symbol);
					setStore({ watchlistStocks: newStocks });
				} catch (error) {
					console.log("error", error);
				}
			},
			//ACTIONS TO LOAD DATA FROM EXTERNAL APIS

			loadChart: async (symbol, indicator) => {
				const candleSize = "D";
				const currentDate = Math.round(Date.now() / 1000.0);
				const initialDate = currentDate - 31556926;
				("AAPL&resolution=D&from=1583098857&to=1584308457&indicator=wma");
				const urlStock = "https://finnhub.io/api/v1/indicator?symbol=".concat(
					symbol,
					"&resolution=",
					candleSize,
					"&from=",
					initialDate,
					"&to=",
					currentDate,
					"&indicator=",
					indicator,
					"&timeperiod=14",
					"&token=bsrbhmf48v6tucpg28a0"
				);
				let chartDictionary = {};
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(urlStock, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let chartData = await result;
					chartData.t = getActions().createDateArray(chartData.t);
					const chartDictionary = getStore().stockChart;
					chartDictionary[symbol] = chartData;
					setStore({ stockChart: chartDictionary });
				} catch (error) {
					console.log("error", error);
				}
			},
			// ACTIONS TO LOAD STOCK INFO FROM OUR DATABASE
			loadStockInfo: async symbol => {
				const urlStock = urlBase.concat("/stock/", symbol);

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(urlStock, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let stock = await result;
					return stock;
				} catch (error) {
					console.log("error", error);
				}
			},
			// LOADS STOCKS STARTING BY...
			loadStocksStartingWith: async search => {
				const urlStock = urlBase.concat("/stocks/", search);

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(urlStock, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let stocks = await result;
					return stocks;
					//setStore({ allStocks: stocks });
				} catch (error) {
					console.log("error", error);
				}
			},
			// LOADS ALL STOCKS
			loadStocksInfo: async () => {
				const urlStock = urlBase.concat("/stock/");

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(urlStock, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let stocks = await result;
					setStore({ allStocks: stocks });
				} catch (error) {
					console.log("error", error);
				}
			}
		}
	};
};

export default getState;
