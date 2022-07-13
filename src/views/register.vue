<template>
  <div class="container">
    <div class="row">
        <form class="w-50 mx-auto bg-white p-5" @submit.prevent="register">
        <h2>Register</h2>
        <div class="form-group m-3">
            <!-- firstName -->
            <label for="name"></label>
            <input id="name" v-model="name" class="form-control" type="text" placeholder="Enter Name">

            <!-- email -->
            <label for="email"></label>
            <input id="email" v-model="email" class="form-control" type="email" placeholder="Enter Email Address">

            <!-- password -->
            <label for="password"></label>
            <input id="password" v-model="password" class="form-control" type="password"
             placeholder="Choose password">
        </div>
        <button type="submit" class="btn btn-danger">Register</button>
      </form>
    </div>

    <div v-if="user">
      <h2>Registration Successful</h2>
    </div>
  </div>
</template>
<script>

export default {
data() {
    return {
        name: "",
        email: "",
        password: ""
    }    
},

methods: {
register(){
  // Fetches register function in store and passes values to it
    return this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
    })
},
},

computed: {
    // returns value from store
    user(){
        return this.$store.state.user
    },
},
}
</script>

<style>

</style>