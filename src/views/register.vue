<template>
  <div class="container">
    <div class="row">
        <form class="w-50 mx-auto bg-white p-5" @submit.prevent="register">
        <h2>Register</h2>
        <div class="form-group m-3">
            <!-- firstName -->
            <label for="firstName"></label>
            <input id="firstName" class="form-control" type="text" placeholder="Enter Name">

            <!-- lastName -->
            <label for="lastName"></label>
            <input id="lastName" class="form-control" type="text" placeholder="Enter Surname">

            <!-- email -->
            <label for="email"></label>
            <input id="email" class="form-control" type="email" placeholder="Enter Email Address">

            <!-- password -->
            <label for="password"></label>
            <input id="password" class="form-control" type="password" placeholder="Choose password">
        </div>
        <button type="submit" class="btn btn-danger">Register</button>
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
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }    
},
methods: {
register(){
    return this.$store.dispatch("register", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
    })
}
},

computed: {
    // returns value from store
    user(){
        return this.$store.state.user
    }
},
}
</script>

<style>

</style>