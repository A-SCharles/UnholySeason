<template>
  <h2>I am Working</h2>
  <div v-if="animes">
    <div class="container">
      <div class="row">
        <!-- <lists v-for="anime of animes" :key="anime.id" /> -->
        <div
          class="card m-3 p-3"
          v-for="anime of animes"
          :key="anime.id"
          style="width: 18rem"
        >
          <img :src="anime.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ anime.name }}</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h2>Loading ...</h2>
  </div>
</template>

<script>
import lists from "@/components/lists.vue";
export default {
  components: { lists },
  data() {
    return {
      animes: null,
    };
  },

  mounted() {
    fetch("http://localhost:3000/anime")
      .then(res => res.json())
      .then(data => this.animes = data)
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.card img {
  height: 125px;
  width: 100%;
}

</style>