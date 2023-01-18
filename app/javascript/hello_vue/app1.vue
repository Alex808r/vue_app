<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
<!--        <q-btn dense flat round icon="fas fa-cogs" @click="toggleLeftDrawer" />-->

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

<!--        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />-->
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

<!--    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>-->
      <!-- drawer content -->
<!--    </q-drawer>-->

<!--    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>-->
<!--       drawer content -->
<!--    </q-drawer>-->

    <q-page-container>

      <q-toggle
        v-bind:value="user.savePassword"
        v-on:input="input"
        color="green"
      />

      <div class="q-pa-md">
        <q-table
            title="Treats"
            dense
            :data="data"
            :loading="loading"
            row-key="name"
        >
          <template v-slot:no-data>
            <p>12345678</p>
          </template>

        </q-table>

      </div>

    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>




<script>
export default {
  data() {
    return {
      left: false,
      right: false,

      data: [],
      columns: [],
      loading: true,
      error: true,
      user: {
        savePassword: false
      }
    }
  },

  created () {
    setTimeout(this.fetchItems, 1000)

  },

  methods: {
    async fetchItems() {
        this.loading = true
        try {
          const responce = await this.$api.items.index()
          this.data = responce.data
        } catch {
          this.error = true
        }
          this.loading = false

    },
    input (value) {
      console.log(value)
      this.user.savePassword = value
    }
  },
}
</script>