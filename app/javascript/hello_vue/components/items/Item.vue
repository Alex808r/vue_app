<template lang="pug">
  div
    slot(name="title" :item_name="mitem.name")
      p {{ mitem.name }} {{ mitem.type }}
    // p {{ fullname }} демонстрация computed

    slot(name="button")
      button(v-on:click="change") Change
</template>

<script>
export default {
  name: 'Item',
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
  // computed наблюдает за объктом целиком
  computed: {
    fullname() {
      return this.mitem.name + this.mitem.type
    }
  },
  // при использовании watch приходится дублировать код для отслеживания изменения полей объекта
  watch: {
    'item.name' () {
      this.fullname = this.mitem.name + this.mitem.type
    },
    'item.type' () {
      this.fullname = this.mitem.name + this.mitem.type
    },
  },

  methods: {
    change(){
      this.$emit('changed', this.mitem.id)
    }
  }
}
</script>
