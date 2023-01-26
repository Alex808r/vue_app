<template lang="pug">
  q-tabs(align="left")
    div(v-if="currentUser")
      span Вошли как {{ currentUser.name }} ({{ currentUser.email }})</span>
      q-btn(color="white" text-color="black" @click="signOut" label="Выйти")

    q-route-tab(
      icon="wc"
      label="Клиенты"
      to="/staffs/clients"
      exact
    )
    q-route-tab(
      icon="build"
      label="Оборудования"
      to="/staffs/equipments"
      exact
    )
    q-route-tab(
      icon="apartment"
      label="Организации"
      to="/staffs/organizations"
      exact
    )
</template>

<script>
// import { currentUser } from '../../mixins/currentUser'
export default {
  name: 'NavbarLayout',
  // mixins: [currentUser],

  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    signOut() {
      // eslint-disable-next-line no-unused-vars
      this.$api.staffs.sign_out().then(() => {
        this.$store.commit('SET_CURRENT_USER', null);
        this.$router.push({ name: 'staffs_sign_in' });
      });
    },
  },
};
</script>
