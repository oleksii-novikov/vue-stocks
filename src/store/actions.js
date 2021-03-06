import http from './../http-common';

const loadData = ({ commit }) => {
  http.get('data.json')
    .then(response => response.data)
    .then((data) => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
};

export default { loadData };
