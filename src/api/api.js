import axios from 'axios';
import {ACCESS_KEY} from '@env';

const baseApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {client_id: ACCESS_KEY, per_page: 50},
});

export default baseApi;
