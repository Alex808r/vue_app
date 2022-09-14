<template lang="pug">
  #app
    template(v-if="loading")
      p Loading
    template(v-else-if="error")
      p Error
    template(v-else)
      div(v-for="item in items" :key="item.id")
        item(v-bind:item="item" @changed="change")
</template>

<script>
import Item from './components/items/Item.vue'

export default {
  data: function () {
    return {
      items: [],
      loading: true,
      error: false
    }
  },

  beforeCreate() {
    console.log('Before Created')
  },

  created() {
    setTimeout(this.fetchItems, 1000)
    console.log('Created')
  },

  updated() {
    console.log('Updated')
  },

  // watch: {
  //   message: {
  //     handler(value, oldValue){
  //       console.log(`message changed from ${oldValue.text} => ${value.text}`)
  //       console.log('новое значение: %s, старое значение: %s', value.text, oldValue.text)
  //     },
  //     deep: true
  //   }
  // },

  methods: {
    // pClass() {
    //   return this.isRed ? 'red' : 'orange'
    // },
    // changeMessage() {
    //   if (this.message.text === "Hello Vue!")
    //     this.message.text = "New message"
    //   else{
    //     this.message.text = "Hello Vue!"
    //   }
    // },
    fetchItems(){
      this.loading = true
      this.$api.items.index()
          .then(({ data }) => {
            console.log( data )
            this.items = data
          })
          .catch(() => (this.error = true))
          .finally(() => this.loading = false)

    },
    // async fetchItems(){
    //   this.loading = true
    //   try{
    //     const responce = await axios.get('/list')
    //     this.items = responce.data
    //   } catch {
    //     this.error = true
    //   }
    //     this.loading = false
    // },
    change(id){
      console.log(`change ${id} item`)
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.red {
  color: red;
}
.orange {
  color: orange;
}
</style>
