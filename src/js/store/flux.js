const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Watchlist: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPrice: async page => {
				const urlPeople =
					"https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590&token=bsrbhmf48v6tucpg28a0";

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
