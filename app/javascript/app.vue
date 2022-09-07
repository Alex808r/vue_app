<template lang="pug">
  #app
    p(v-bind:class="pClass()") {{ message.text }}
    button(v-on:click="changeMessage") Change

    ul
      li(v-for="list in lists") {{ list }}

</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: {
        text: "Hello Vue!",
        id: 1
      },
      color: 'orange',
      isRed: false,
      lists: ['a', 'b', 'c']
    }
  },

  beforeCreate() {
    console.log('Before Created')
  },

  created() {
    this.fetchItems()
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
    pClass() {
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
      axios.get('/list')
          .then(({ data }) => {
            console.log( data )
          })
    }
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
