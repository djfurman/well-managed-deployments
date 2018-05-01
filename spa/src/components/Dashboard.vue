<template>
  <div id="dashboard">
    This dashboard should be the user landing page and provide a direct interaction with necessary components for the user
    <div class="columns">
      <div class="column is-one-fourth" v-for="card in cards" :key="card.id">
        <card
          :title="card.title"
          :body="card.body"
          :link="card.link"
          :approval="card.approval"
          :when="card.when"
          :who="card.who"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import moment from 'moment';
export default {
  components: {
    Card
  },

  data() {
    return {
      cards: [
        {
          title: "JIRA-12345: Deploy App",
          body: "Deploy Latest App Source to Production environment",
          link: "/changes/JIRA-12345",
          approval: true,
          when: moment().utc(),
          who: "djfurman"
        },
        {
          title: "JIRA-54321: Database baseline for App",
          body: "Get baseline for App database from production database. Downtime is expected.",
          link: "/changes/JIRA-54321",
          approval: true,
          when: moment().utc().subtract(1, 'day'),
          who: "djfurman"
        },
        {
          title: "JIRA-123: Bring new Business App online",
          body: "Deploy new Business App online",
          link: "/changes/JIRA-123",
          approval: true,
          when: moment().utc().subtract(6, 'day'),
          who: "djfurman"
        }
      ]
    };
  },

  mounted() {
    console.log("You have loaded the dashboard component");
  }
};
</script>
