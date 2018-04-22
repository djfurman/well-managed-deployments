<template>
  <div class="navbar-menu">
      <!-- Stuff to the left -->
      <div class="navbar-start">
        <router-link :to="'home'" class="navbar-item">Home</router-link>
        <router-link :to="'changes'" class="navbar-item">Changes</router-link>
        <router-link :to="'incidents'" class="navbar-item">Incidents</router-link>
        <router-link :to="'configuration'" class="navbar-item">Configuration</router-link>
      </div>

      <!-- Stuff to the right -->
      <div class="navbar-end">
        <router-link :to="'login'" class="navbar-item" v-if="!isAuth">Login</router-link>
        <span class="navbar-item" @click="logout" v-if="isAuth">Logout</span>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  }
}
</script>

