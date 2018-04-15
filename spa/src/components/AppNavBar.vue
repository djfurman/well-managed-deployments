<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a @click="goToRoot" class="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
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
