<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-content-center">
      <form class="w-50 mx-auto bg-white p-5 form" @submit.prevent="login">
        <h2 style="font-size: 3vw">𝕷𝖔𝖌𝖎𝖓</h2>

        <div class="form-group mb-3">
          <input
            type="email"
            class="form-control my-3"
            placeholder="Enter Email Address"
            id="email"
            v-model="email"
          />
          <!-- </div>

        <div class="mb-3"> -->
          <input
            type="password"
            class="form-control my-3"
            id="password"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>

        <button type="submit" class="btn btn-dark">Submit</button>
      </form>

      <router-link :to="{ name: 'register' }">
        <a style="font-size: 30px" class="nav-link"> 𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗 </a>
      </router-link>
    </div>

    <div v-if="user">
      <h2>{{ user.name }} Login Successful</h2>
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
        password: this.password,
      });
    },
  },

  computed: {
    // returns userData if exists
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style>
.row {
  min-height: 80vh;
}

.form {
  border-radius: 20px;
  background-color: red !important;
  color: black;
}
</style>
