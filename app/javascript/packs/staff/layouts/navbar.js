import Vue from 'vue/dist/vue';
import LayoutStaffNavbar from 'components/staff/layouts/navbar';
// import LayoutStaffNavbar from '../../../components/staff/layouts/navbar';

new Vue({
    el: '#layouts-staff-navbar',
    components: {
        'layouts-staff-navbar': LayoutStaffNavbar
    }
});

//
// document.addEventListener('DOMContentLoaded', () => {
//     const app = new Vue({
//         render: h => h(LayoutStaffNavbar)
//     }).$mount()
//     document.body.appendChild(app.$el)
//
//     console.log(app)
// })