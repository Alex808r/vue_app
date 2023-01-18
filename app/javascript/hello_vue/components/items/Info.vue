<template lang="pug">
  div
    p {{ mitem.name }} {{ mitem.type }}
    p {{ mitem.task }}

    button(v-on:click="change") Change
</template>

<script>
export default {
  name: 'Info',
  props: {
    mitem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },

  methods: {
    change(){
      this.$emit('changed', this.mitem.id)
    }
  }
}
</script>