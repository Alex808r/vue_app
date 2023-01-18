// import Vue from 'vue/dist/vue.esm'
// import Dashboard from 'components/staff/dashboard'
// import axios from 'axios'
//
// document.addEventListener('DOMContentLoaded', () => {
//     axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//
//     new Vue({
//         el: '#staff-clients',
//         components: {
//             'client-list-component': Dashboard
//         }
//     })
// })


import Vue from 'vue'
import '../../api/index'
import Dashboard from '../../components/staff/dashboard'

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        render: h => h(Dashboard)
    })
})