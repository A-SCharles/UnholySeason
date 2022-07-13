<template>
  <h2>user: {{user.name}}</h2>

</template>

<script>

export default {
methods: {

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