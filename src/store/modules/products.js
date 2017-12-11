import products from '../../data/products';

const state = {
  products: [],
};

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const mutations = {
  [FETCH_PRODUCTS](state, payload) {
    state.products = payload;
  },
};
const actions = {
  fetchProducts({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(FETCH_PRODUCTS, products);
        resolve();
      }, 1000);
    });
  },
};

const getters = {
  products: state => state.products,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
