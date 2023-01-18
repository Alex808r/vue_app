import Vue from 'vue'
// import App from '../hello_vue/app.vue'
import '../api/index'
import Dashboard from "../components/client/dashboard";
new Vue({
    el: '#app',
    render: h => h(Dashboard)
}).$mount()



// document.addEventListener('DOMContentLoaded', () => {
//     const app = new Vue({
//         render: h => h(App)
//     }).$mount()
//     document.body.appendChild(app.$el)
//
//     console.log('Added client')
// })