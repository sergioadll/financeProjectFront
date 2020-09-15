const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Watchlist: [],
			watchlists: [{ id: 1, user_id: 1, name: "Short-term" }, { id: 2, user_id: 1, name: "Long-term" }]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
