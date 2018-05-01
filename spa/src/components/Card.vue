<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ card_title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ card_body }}
      </div>
      <br/>
      <div class="content">
        <p>Requested By {{ made_by }}, {{ age }} ago</p>
      </div>
    </div>
    <footer v-if="with_approvals" class="footer">
      <button class="card-footer-item">Approve</button>
      <button class="card-footer-item">Deny</button>
    </footer>
  </div>
</template>

<script>
import moment from "moment";
export default {
  created() {
    this.card_title = this.title;
    this.card_body = this.body;
    this.links_to = this.link;
    this.made_at = moment(this.when);
    this.made_by = this.who;

    if (!this.approval) {
      this.with_approvals = false;
    } else {
      this.with_approvals = true;
    }
  },

  computed: {
    age() {
      return moment(this.made_at).fromNow();
    }
  },

  data() {
    return {
      card_title: "",
      card_body: "",
      links_to: "",
      with_approvals: false,
      made_by: "",
      made_at: moment()
    };
  },

  props: {
    title: String,
    body: String,
    link: String,
    approval: Boolean,
    when: String,
    who: String
  }
};
</script>

