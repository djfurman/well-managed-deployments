<template>
<div class="container">
  <!-- Standard Header -->
  <app-nav-bar></app-nav-bar>

  <!-- SPA content -->
  <router-view></router-view>

  <!-- Standard Footer -->
  <app-footer></app-footer>
  <loading></loading>
</div>
</template>

<script>
import AppFooter from './AppFooter';
import AppNavBar from './AppNavBar';
import Loading from './Loading';
export default {
  components: {
    AppFooter,
    AppNavBar,
    Loading
  },

  mounted() {
    console.log("Welcome to WMD Professor Falkin, would you like to play a nice game of chess?");
  }
};
</script>
