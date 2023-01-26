import Vue from 'vue'
import '../app/api/index'
import Layout from "../app/components/common/layout"
import router from '../app/router'
import i18n from '../app/i18n';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(Layout),
    router,
    i18n,
  }).$mount()
})