import Vue from 'vue';
import axios from 'axios';

const token = document.querySelector('meta[name="csrf-token"]').content;

const adapter = axios.create({
  // baseURL: '/',
  baseURL: process.env.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-CSRF-TOKEN': token,
  },
});

const api = {
  message: () => adapter.get('/message'),
  current: () => adapter.get('/current'),
  items: {
    index: () => adapter.get('/items'),
    show: (id) => adapter.get(`/items/${id}`),
    update: (id, params) => adapter.patch(`/items/${id}`, params),
  },
};

Vue.prototype.$api = api;
