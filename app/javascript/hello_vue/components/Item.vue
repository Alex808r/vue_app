<template lang="pug">
 .row
   .col-12
     router-link(:to="{ name:'items' }") Back
   .col-12
     q-input(labal="name" v-model="item.name")
     q-input(labal="text" v-model="item.text")
   .col-12
     q-btn(@click="updateItem") Update
</template>

<script>
import LoadersMixins from '../mixines/loaders'

export default {
  name: 'Item',
  mixins: [ LoadersMixins ],
  data() {
    return{
      item: {},
    }
  },

  computed: {
    id() {
      return this.$route.params.id
    }
  },

  created() {
    this.$api.items.show(this.id)
        .then(({ data }) => (this.item = data ))
  },

  methods: {
    updateItem() {
      this.$api.items.update(this.id, this.item)
    }
  },
}
</script>