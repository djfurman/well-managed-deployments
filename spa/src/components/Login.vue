<template>
<div id="login-form" class="form">
    <form @submit.prevent="login()">
        <div class="field">
            <label for="username" class="label">Username</label>
            <div class="control">
                <input id="username" type="text" class="input" placeholder="email address or username" v-model="username">
            </div>
        </div>

        <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
                <input type="password" class="input" name="password" id="password" v-model="password">
            </div>
        </div>

        <div class="field is-groupd">
            <div class="control">
                <button type="submit" class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-text" @click="redirectTo('/')">Cancel</button>
            </div>
        </div>
    </form>

</div>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
  data() {
      return {
          username: '',
          password: ''
      }
  },

  methods: {
      login() {
          Auth.signIn(this.username, this.password)
          .then(user => {
                this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password
                });
          })

          this.redirectTo('home');
      },

      redirectTo(route) {
          this.$router.push(route);
      }
  }
}
</script>
