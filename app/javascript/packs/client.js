import Vue from 'vue';
import '../app/api/index';
import Layout from '../app/components/client/layout/layout.vue';
import i18n from '../app/i18n';
import store from '../app/store';
import router from '../app/router';
import '../app/socket';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: (h) => h(Layout),
  }).$mount();
});
// document.addEventListener('DOMContentLoaded', () => {
//     const app = new Vue({
//         render: h => h(App)
//     }).$mount()
//     document.body.appendChild(app.$el)
//
//     console.log('Added client')
// })
