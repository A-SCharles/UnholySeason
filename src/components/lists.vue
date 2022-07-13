<template>
  
    <div
      class="card mx-auto m-5" style="
        width: 35rem;
        position: relative;
        height: 350px;
        margin-bottom: 40px;
      "
      data-aos="fade-up"
      data-aos-duration="3000"
    >
    <router-link :to="{ name: 'anime', params: { id: anime.id } }">
      <img
        :src="anime.anime_Gif"
        id="show"
        class="card-img-top img-fluid"
        style="height: 350px; object-fit: cover; width: 100%;"
      />

      <!-- <img
        :src="anime.image"
        id="hide"
        class="card-body img-fluid"
        style="height: 350px; object-fit: cover"
      /> -->

      <div class="card-body">
        <h5 class="card-title">{{ anime.name }}</h5>
        <p class="card-text"></p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
        </router-link>
    </div>
</template>

<script>
import store from "@/store";

export default {
  props: ["anime"],
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
    },
  },
};
</script>

<style></style>
