<template>
  <div v-if="anime">
    <div class="container h-100">
      <div id="test" class="row h-100 d-flex justify-content-center align-items-center">
        <div class="card p-3 bg-black text-white">
            <div class="bg-warning mb-3">
                <p>Anime info</p>
            </div>
          <div class="row">
            <div class="col-5">
              <img id="img" :src="anime.desc_image" alt="..." />
            </div>
            <div class="col-7 mx-auto   ">
              <div class="card-body">
                <h3 class="card-title">{{ anime.name }}</h3>
                <p class="card-text text-start">{{ anime.description }}</p>
                <p class="card-text text-start"><strong>Genre: </strong>{{ anime.genre }}</p>
                <p class="card-text text-start"><strong>Released: </strong>{{ anime.dateAired }}</p>
                <p class="card-text text-start"><strong>Episodes: </strong>{{ anime.Episodes }}</p>
                <p class="card-text text-start"><strong>Seasons: </strong>{{ anime.seasonCount }}</p>
                <p class="card-text text-start"><strong>Status: </strong>{{ anime.status }}</p>
                <p class="card-text text-start"><strong>Alternate Names: </strong>{{ anime.alternative }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["id"],
  data() {
    return {
      anime: this.$store.state.anime || this.id  
    };
  },
  mounted() {
    // mapActions([`getAnimes(${this.animes})`])
    // fetch("http://localhost:3000/anime/" + this.id)
    //   .then((res) => res.json())
    //   .then((data) => (this.anime = data));
  },

  //
  computed: {
    
  },
};
</script>

<style>
#img {
  /* aspect-ratio: 1; */
  width: 75%;
  min-height: 100%;
}

#test {
    min-height: 95vh;
}
</style>