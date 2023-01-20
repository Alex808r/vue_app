<template lang="pug">
  q-dialog(
    @hide="pushToItems"
    v-model="show")
    q-card
      q-card-section
        .col-12
          q-input(labal="name" v-model="item.name")
          q-input(labal="text" v-model="item.text")
        .col-12
          q-btn(@click="updateItem") Update
</template>

<script>
import LoadersMixins from '../mixines/loaders'

export default {
  name: 'ItemDialog',
  mixins: [ LoadersMixins ],

  data(){
    return{
      item: {},
      show: true
    }
  },

  created() {
    this.$api.items.show(this.id)
        .then(({ data }) => (this.item = data ))
  },

  computed: {
    id() {
      return this.$route.params.id
    }
  },

  methods: {
    pushToItems() {
      this.$router.push({name: 'items'})
    },

    updateItem() {
      this.$api.items.update(this.id, this.item)
          .then(()=>(this.$emit('updated')))
    }

  }
}
</script>