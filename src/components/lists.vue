<template>
<div class=" col-md-6">

<div class="card mx-auto" v-for="anime of animes" :key="anime.id" style=" width: 40rem; position:relative; height:350px; margin-bottom: 40px" data-aos="fade-up" data-aos-duration="3000">

    <img :src="anime.anime_Gif" id="show" class="card-img-top img-fluid" style="height: 350px; object-fit: cover; " />

    <img :src="anime.image" id="hide" class="card-body img-fluid" style="height: 350px; object-fit: cover; " />

    <div class="card-body">
      <h5 class="card-title">{{ anime.name }}</h5>
      <p class="card-text"></p>
      <router-link :to="{name: 'anime', params: {id: anime.id}}">
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </router-link>
    </div>

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