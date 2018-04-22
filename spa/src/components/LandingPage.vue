<template>
    <div id="landing-page">
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Well-managed Deployments</h1>
                    <h2 class="subtitle">A serverless, cloud-first answer to service management</h2>
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column is-one-third" v-for="service in service_list" :key="service.id">
                <div class="card" :id="service.id">
                    <header class="card-header">
                        <p class="card-header-title is-centered">{{ service.name }}</p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {{ service.desc }}
                        </div>
                    </div>
                    <footer class="card-footer">
                        <span class="card-footer-item" @click="learnMore(service.id)">Learn More</span>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          service_list: []
      }
  },

  methods: {
      learnMore(id) {
          this.$router.push(`/services/${id}`);
      }
  },

  mounted() {
      // This will be replaced with a database call to get latest services and descriptions
      this.service_list = [
          {id: '368ced24-a9c8-481f-affb-48b18962adb5', name: 'Infrastructure Management', desc: 'While each team may know their infrastucture well, combining multiple teams into one or more cloud accounts can make management hard. WMD integrates with cloud providers and allows you to map your infrastructure use cases and identifying cost centers throughout your enterprise architecture.'},
          {id: '1def41b3-7d0c-45b6-affb-b201561a661f', name: 'Change Management', desc: 'The heart of production beats as well as it is managed. Scheduled releases with appropriate testing conducted and automatic deployments are a must, but what happens when manual tweaks are required? Managing that process correctly can be a nightmare and in many companies results in an hour of paperwork for a two minute change. Automate the headache and protect what matters, your customer experience.'},
          {id: '6b352de4-6f85-4a39-ab27-f8cb0420e619', name: 'Incident Management', desc: 'If your product or service is active, incidents are a matter of when, not if. The key to managing these incidents are to quickly identify and coordinate a team to restore service and build a knowledge base of causes. WMD allows this while providing direct API driven integrations with popular monitoring and response systems, managing the data without getting in the way.'}
      ];
  }
}
</script>
