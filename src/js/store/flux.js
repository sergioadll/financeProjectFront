import { encode } from "base-64";

const urlBase = "https://3000-f02fdf9a-7b7f-45f0-b64b-b90b00be1a5d.ws-eu01.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			Watchlist: [],
			watchlists: [{ id: 100, name: "Short-term" }, { id: 101, name: "Long-term" }],
			watchlistStocks: [
				{
					id: 13972,
					name: "APPLE INC MOCKUP",
					symbol: "AAPL"
				},
				{
					id: 17992,
					name: "INTL BUSINESS MACHINES CORP MOCKUP",
					symbol: "IBM"
				},
				{
					id: 23342,
					name: "TESLA INC MOCKUP",
					symbol: "TSLA"
				}
			]
		},
		actions: {
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
					getActions().loadWatchlists();
					console.log(token);
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
				} catch (error) {
					console.log("error", error);
				}
			},
			loadStocksFromWatchlists: async watchlist_id => {
				//modificar cuando se tenga el endpoint
				const urlExt = "/watchlist/".concat(watchlist_id.toString());
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
					let res = await fetch(urlWatchelement, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let stocks = await result;
					setStore({ watchlistStocks: stocks });
					console.log("store stocks:    ", stocks);
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

			//ACTIONS TO LOAD DATA FROM EXTERNAL APIS
			loadPrice: async page => {
				const urlPeople =
					"https://finnhub.io/api/v1/stock/candle?symbol=IBM&resolution=D&from=1546383599&to=1575243390&token=bsrbhmf48v6tucpg28a0";

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(urlPeople, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let price = await result;
					setStore({ Watchlist: price });
				} catch (error) {
					console.log("error", error);
				}
			}
		}
	};
};

export default getState;
