<template lang="pug">
  .row
    q-table(
      @request="onRequest"
      title="Treats"
      dense
      :data="data"
      :columns="columns"
      :loading="loading"
      row-key="name"
      ref="table")
      template(v-slot:body-cell-actions="props")
        td.text-right
          q-btn(v-on:click="pushToEdit(props.row.id)" unelevated text-color="orange" icon="edit")
      template(v-slot:no-data)
        p Im bottom slot
    router-view(@updated="updated")
</template>

<script>
export default {
  name: 'ItemTable',

  data () {
    return {
      data: [],
      columns: [
        { name: 'id', label: 'ID', field: 'id' },
        { name: 'name', label: 'NAME', field: 'name' },
        { name: 'text', label: 'TEXT', field: 'text' },
        { name: 'actions', label: 'ACTIONS', }
      ],
      loading: true,
      error: true,
      // user: {
      //   savePassword: false
      // }
    }
  },

  created () {
    setTimeout(this.fetchItems, 1000)
  },

  methods: {
    onRequest(){
      this.fetchItems()
    },

    async fetchItems () {
      this.loading = true
      try {
        const responce = await this.$api.items.index()
        this.data = responce.data
      } catch {
        this.error = true
      }
      this.loading = false
    },

    pushToEdit(id) {
      this.$router.push({ name: 'item', params: { id: id } })
    },

    updated() {
      // console.log(this.$refs)
      this.$refs.table.requestServerInteraction()
    }
  },
}
</script>