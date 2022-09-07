<template lang="pug">
  div
    p {{ item.name }}
    button(v-on:click="change") Change
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    change(){
      this.$emit('changed', this.item.id)
    }
  }
}
</script>
