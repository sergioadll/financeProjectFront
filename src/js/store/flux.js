const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Watchlist: [],
			watchlists: [{ id: 1, name: "Short-term" }, { id: 2, name: "Long-term" }],
			watchlistStocks: []
		},
		actions: {
			//ACTIONS TO GET DATA FROM OUR API
			loadWatchlists: async user_id => {
				const urlBase = "https://3000-f74f5608-fa15-4912-b026-ce7a2344e876.ws-eu01.gitpod.io/";
				const urlExt = "/user/".concat(user_id.toString(), "/watchlist");
				const urlWatchlists = urlBase.concat(urlExt);

				var requestOptions = {
					method: "GET",
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
				const urlBase = "https://3000-f74f5608-fa15-4912-b026-ce7a2344e876.ws-eu01.gitpod.io/";
				const urlExt = "/watchlist/".concat(watchlist_id.toString(), "/watchelement");
				const urlWatchelement = urlBase.concat(urlExt);

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(urlWatchelement, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let watchelements = await result;
					setStore({ watchlistStocks: watchelements });
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
