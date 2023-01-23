import Vue from 'vue'
import '../app/api/index'
import router from '../app/router'
import Layout from "../app/components/client/layout/layout";

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        router,
        render: h => h(Layout)
    }).$mount()
})

// document.addEventListener('DOMContentLoaded', () => {
//     const app = new Vue({
//         render: h => h(App)
//     }).$mount()
//     document.body.appendChild(app.$el)
//
//     console.log('Added client')
// })