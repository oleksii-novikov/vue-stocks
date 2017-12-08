import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Portfolio from '@/components/portfolio/Portfolio';
import Stocks from '@/components/stocks/Stocks';
import Login from '@/components/user/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks,
    },
  ],
});
