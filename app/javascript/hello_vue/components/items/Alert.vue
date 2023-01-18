<template lang="pug">
  div
    tag
    p {{ mitem.name }} {{ mitem.type }}
    button(v-on:click="change") Change
</template>

<script>
// import Tag from './Tag.vue'

export default {
  name: 'Alert',
  // components: { Tag },
  props: {
    mitem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },

  methods: {
    change () {
      this.$emit('changed', this.mitem.id)
    }
  },
  components: {
    Tag: () => import ('./Tag.vue')
  }
}
</script>