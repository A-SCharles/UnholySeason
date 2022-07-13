<template>
  <div class="container" style="margin-top: 5rem;">

    <div class="row">

      <form class="w-50 mx-auto bg-white p-5 form" @submit.prevent="login">

        <h2 style="font-size: 3vw">𝕷𝖔𝖌𝖎𝖓</h2>

        <div class="mb-3">

          <label for="email" class="form-label">
              Email address:
          </label>

          <input type="email" class="form-control" id="email" v-model="email" style='border-radius: 20px;'/>

          <div id="emailHelp" class="form-text" style="color: white">
            We'll never share your email with anyone else.
          </div>

        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>

          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password" style="border-radius: 20px;"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn" style="background-color: black; color: white; border-radius: 20px; ">Submit</button>
      </form>
    </div>

    <div v-if="user">
      <h2>Login Successful</h2>
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
  mounted() {
      
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
.form{
  border-radius: 20px;
  background-color: red !important;
  color: black;
}
</style>