<template>
  <div class="card mx-auto m-3 p-3"  style="width: 18rem">
    <img :src="anime.anime_Gif" id="show" class="card-img-top" alt="..." />
    <img :src="anime.image" id="hide" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ anime.name }}</h5>
      <p class="card-text"></p>
      <router-link :to="{ name: 'anime', params: { id: anime.id } }">
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  props: ['anime'],
  // data() {
  //     return {
  //       animes: [],
  //     }
  // },
  mounted() {
    // fetch("http://localhost:3000/anime")
    //   .then((res) => res.json())
    //   .then((data) => (this.animes = data))
    //   .catch((err) => console.log(err));
  // this.$store.dispatch("getData")
  },
  computed: {
    animes() {
      // return this.$store.state.animes
      
    }
  },
}
</script>

<style>
</style>