<template lang="pug" >
  #app
    p(v-bind:style=`{color}`) {{ message.text }}
    p(v-bind:class="pClass()") {{ message.text }}

    button(v-on:click="changeMessage()") Message

    div(v-for="list in lists") {{ list }}

    template(v-if="loading")
      p(v-bind:class="pClass()") Loading
    template(v-else-if="error")
      p(v-bind:class="isRed ? 'red' : ''") Error ;-(
    template(v-else)
      div(v-for="item in items" :key="item.id")
        //component(:is="item.type" :mitem="item" v-on:changed="change")
        my-item(v-bind:mitem="item" v-on:changed="change")
          template(v-slot:title="props")
            //или template(v-slot:title="{ item_name }")
            item-title(:title="props.item_name")
          template(v-slot:button)
            button Not change

</template>

<script>
import Item from './components/items/Item.vue'
import ItemTitle from './components/items/ItemTitle.vue'
// import Alert from './components/items/Alert.vue'
// import Info from './components/items/Info.vue'
// import Error from './components/items/Error.vue'

export default {
  data: function () {
    return {
      items: [],
      isRed: true,
      color: 'green',
      loading: true,
      error: false,
      message: {
        type: Object,
        text: "Hello Vue!"
      },
      lists: ['a', 'b', 'c']
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

  watch: {
    message: {
      handler(value, oldValue){
        console.log(`message changed from ${oldValue.text} => ${value.text}`)
        console.log('новое значение: %s, старое значение: %s', value.text, oldValue.text)
      },
      deep: true
    }
  },

  methods: {
    pClass () {
      return this.isRed ? 'red' : 'orange'
    },
    changeMessage() {
      if (this.message.text === "Hello Vue!")
        this.message.text = "New message"
      else{
        this.message.text = "Hello Vue!"
      }
    },
    fetchItems(){
      this.loading = true
      this.$api.items.index()
          .then(({ data }) => {
            console.log( data );
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

    change(id) {
      console.log(`change ${id} item`)
    }
  },

  components: {
    'my-item': Item,
    'item-title': ItemTitle,
    // Alert,
    // Info,
    // Error
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
