import axios from 'axios';

const http = axios.create({
  baseURL: 'https://vue-stocks-982b3.firebaseio.com/',
  headers: {},
});

export default http;
