<template>
  <div class="home"></div>

  <div class="container">
    <div style="height: 10vh; margin-top: 5rem;">
      <h1 class="fs-1 fw-light" style='color: #FF0000'>Recently Added</h1>
    </div>

    <hr />

    <div v-if="animes">
      <div class="row">
        <Lists v-for="anime in sorted" :key="anime.id" :anime="anime" />
      </div>
    </div>

    <div v-else>
      <h2>
        Loading ...
      </h2>
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Lists from '@/components/lists.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Lists
  },

  mounted() {
    this.$store.dispatch("getData")
  },

  computed: {
    animes() {
      return this.$store.state.animes
    },
    sorted() {
      // console.log("im here")
      let sortedA = this.$store.state.animes.reverse()
      // console.log(sortedA)
      return sortedA.slice(0, 3)
    }
  },
  methods: {
    // sorted() {
    //   console.log("im here")
    //   let sortedA = this.$store.state.animes
    //   console.log(sortedA)
    //   return sortedA.reverse()
    // }
  },
}


</script>

<style>
.home {

  background-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 30%, #000000 99%), url('https://i.postimg.cc/yxgvWZPB/asta-demon-landing.gif');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
</style>