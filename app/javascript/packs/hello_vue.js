/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm' // используем полную сборку так как есть строковый шаблон - template: <p> {{ message }}</p>
// import App from '../hello_vue/app.vue'
import App from '../hello_vue/app1.vue' // работа с quasar
import '../hello_vue/api'
import '../hello_vue/quasar'
import router from '../hello_vue/router'
import '../hello_vue/socket'
import store from '../hello_vue/store'
import i18n from '../hello_vue/i18n'




document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount()
})

// Global example
// document.addEventListener('DOMContentLoaded', () => {
//   Vue.component('my-component-name', {
//     template: '<p> {{ message }} </p>',
//     data(){
//       return {
//         message: 'my-component'
//       }
//     }
//   })
//   new Vue({
//     el: "#app"
//   }).$mount()
// })

// Local example
// document.addEventListener('DOMContentLoaded', () => {
//   const myComponentName =  {
//     template: '<p> {{ message }} </p>',
//     data(){
//       return {
//         message: '1234'
//       }
//     }
//   }
//   new Vue({
//     el: "#app",
//     components:{
//       'my-component-name': myComponentName
//     }
//   }).$mount()
// })


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
