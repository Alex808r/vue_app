import Vue from 'vue'
import axios from 'axios'

const api = {
    items: {
        index: () => axios.get('/list')
    }
}

Vue.prototype.$api = api