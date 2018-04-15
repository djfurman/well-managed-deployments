<template>
<div class="container">
    <!-- a nav bar would be good -->
    <h1 class="title">WMD</h1>
    <h2 class="subtitle">Well-managed Deployments</h2>

    <app-footer></app-footer>
</div>
</template>

<script>
import AppFooter from './AppFooter';
export default {
  components: {
    AppFooter
  },

  mounted() {
    console.log("This thing loaded");
  }
};
</script>
