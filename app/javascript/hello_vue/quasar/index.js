import Vue from 'vue'
import Quasar from 'quasar/dist/quasar.common'
import 'quasar/dist/quasar.sass'
// import 'quasar/dist/quasar.addon.css'
import iconSet from "quasar/icon-set/material-icons";
import '@quasar/extras/material-icons/material-icons.css'
// import iconSet from "quasar/icon-set/fontawesome-v5"
// import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

Vue.use(Quasar, {
  iconSet: iconSet
})

