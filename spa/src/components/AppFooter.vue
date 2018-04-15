<template>
<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
        <p>
            <strong>Well Managed Deployments</strong> is an open source serverless system. The source code is licensed <a href="https://github.com/djfurman/well-managed-deployments/blob/develop/LICENSE.md">BSD 3-Clause</a>.
        </p>

        <p>
            Copyright <a href="https://github.com/djfurman">Daniel Furman</a>, {{ year }}.
        </p>
    </div>
  </div>
</footer>
</template>

<script>
import moment from 'moment';
export default {
  computed: {
      year() {
          if (this.current_year == '2018') {
              return '2018';
          }
          return `2018 - ${this.current_year.toString()}`
      }
  },

  data() {
      return {
          current_year: '2018'
      }
  },

  mounted() {
      this.current_year = moment().format('YYYY');
  }
}
</script>

