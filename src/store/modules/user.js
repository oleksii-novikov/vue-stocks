const state = {
  isLoggedIn: !!localStorage.getItem('token'),
};

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

const mutations = {
  [LOGIN](state) {
    state.pending = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isLoggedIn = true;
    state.pending = false;
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
  },
};
const actions = {
  login({ commit }) {
    commit(LOGIN);
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('token', 'JWT');
        commit(LOGIN_SUCCESS);
        resolve();
      }, 1000);
    });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('SET_PORTFOLIO', { funds: 0, stocks: [] });
    commit(LOGOUT);
  },
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
