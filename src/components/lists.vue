<template>
  <div
    class="card mx-auto m-3 p-3"
    v-for="anime of animes"
    :key="anime.id"
    style="width: 18rem"
  >
    <img :src="anime.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ anime.name }}</h5>
      <p class="card-text"></p>
      <router-link :to="{name: 'anime', params: {id: anime.id}}">
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      animes: [],
    }
},
  mounted() {
    fetch("http://localhost:3000/anime")
      .then((res) => res.json())
      .then((data) => (this.animes = data))
      .catch((err) => console.log(err));
  },
}
</script>

<style>
</style>