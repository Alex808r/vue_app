import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ItemTable from '../components/ItemTable'
import Item from '../components/ItemDialog'

const router = new VueRouter({
  mode: 'history',
  routes:[
    { path: '/', redirect: '/items' },
    { path: '/items', component: ItemTable, name: 'items',
      children: [
        { path: '/items/:id', component: Item, name: 'item' }
      ]
    },
  ]
})

export default router
