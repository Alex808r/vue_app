<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
<!--        <q-btn dense flat round icon="fas fa-cogs" @click="toggleLeftDrawer" />-->
<!--        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />-->

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
<!--        <item-table/>-->
        <router-view/>
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

import ItemTable from './components/ItemTable.vue'

export default {
  data() {
    return {
      left: false,
      user: {
        savePassword: false,
      },
    };
  },

  methods: {
    input(value) {
      console.log(value);
      this.user.savePassword = value;
    },
  },
  created() {
    console.log(process.env.API_BASE_URL);
    this.$api.current()
      .then(({ data }) => {
        this.$i18n.locale = data.locale;
      });
  },

  components: {
    ItemTable
  },
};
</script>
