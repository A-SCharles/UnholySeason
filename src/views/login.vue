<template>
  <div class="container">
    <div class="row">
      <form class="w-50 mx-auto bg-white p-5" @submit.prevent="login">
        <h2>Login</h2>
        <div class="mb-3">
          <label for="email" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="email" v-model="email" />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
      </form>
    </div>

    <div v-if="user">
      <h2>{{user.name}} Login  Successful</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
      // checks if user exists in db
    login() {
      return this.$store.dispatch("login", {
        email: this.email,
      password:  this.password
      });
    },
  },

  computed: {
    // returns userData if exists
    user(){
        return this.$store.state.user
    }
  },
};
</script>

<style>
</style>