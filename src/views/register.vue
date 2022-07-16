<template>
  <div class="container text-center">
    <div class="row h-75 d-flex justify-content-center align-content-center">
        <form class="w-50 mx-auto p-5 text-black rounded-5" @submit.prevent="register">
        <h2 style="font-size: 3vw">𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗</h2>
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
        <button type="submit" class="btn btn-dark">Register</button>
      </form>
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

<style scoped>
.row {
  min-height: 80vh;
}
form{
  background-color: red !important;
}
</style>