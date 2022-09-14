// import Vue from 'vue'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//     const app = new Vue({
//         render: h => h(App)
//     }).$mount()
//     document.body.appendChild(app.$el)
//
//     console.log('Added staff')
// })


import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
    Vue.component('my-component', {
        template: '<p>Hello {{ message }}</p>',
        data() {
            return {
                message: 'Vue'
            }
        }
    })

    new Vue({
        el: '#app'
    }).$mount()
})
