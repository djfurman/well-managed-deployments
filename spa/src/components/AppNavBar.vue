<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a @click="goToRoot" class="navbar-item">
      <img src="images/if_Nuclear_explosion_102997.png" alt="WMD: A serverless solution to IT service management" width="64" height="64">
    </a>

    <nav-bar-burger></nav-bar-burger>
    <nav-bar-menu></nav-bar-menu>
  </div>
</nav>
</template>

<script>
import NavBarBurger from './NavBarBurger';
import NavBarMenu from './NavBarMenu';
export default {
  components: {
      NavBarBurger,
      NavBarMenu
  },

  methods: {
    goToRoot() {
      this.$router.push('/');
    }
  }
}
</script>
