<template>
<button @click="sortEpisodes">Sort By Episodes</button>
<button @click="sortseasonCount">Sort By Season Count</button>
<input type="text" v-model="search" placeholder="Search..." />
<select v-model="genre">
<option value="All">Genre</option>
<option value="All">All</option>
<option value="Horror">Horror</option>
<option value="Isekia">Isekia</option>
<option value="Amnesia">Amnesia</option>
<option value="Drama">Drama</option>
<option value="Supernatural">Supernatural</option>
<option value="Josei">Josei</option>
<option value="Action">Action</option>
<option value="Mystery">Mystery</option>
<option value="Psychological">Psychological</option>
<option value="Thriller">Thriller</option>
<option value="Dementia">Dementia</option>
<option value="School">School</option>
<option value="Vampire">Vampire</option>
<option value="Seinen">Seinen</option>
<option value="Sci-Fi">Sci-Fi</option>
</select>
<select v-model="goreLevel">
<option value="All">Gore Level</option>
<option value="All">All</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<select v-model="studio">
<option value="All">Studio</option>
<option value="All">All</option>
<option value="Studio Deen">Studio Deen</option>
<option value="Studio Pierrot">Studio Pierrot</option>
<option value="Arms">Arms</option>
<option value="Asread">Asread</option>
<option value="P.A. Works">P.A. Works</option>
<option value="Production I.G">Production I.G</option>
<option value="A-1 Pictures">A-1 Pictures</option>
<option value="Lerche">Lerche</option>
<option value="Science SARU">Science SARU</option>
</select>
  <!-- <div v-if="animes" class="flex-container">
    <div class="container">
      <div class="row">
        <lists v-for="anime of animes" :key="anime.id" :anime="anime" />
      </div>
    </div>
  </div> -->
  <div v-if="animes">
    <div class="container">
      <div class="row">
        <lists v-for="anime of animes" :key="anime.id" :anime="anime" />
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
  data(){
    return {
      search: "",
      area: "All",
      goreLevel: "All",
      studio: "All"
    }
  },
  methods:{
    sortEpisodes(){
      this.$store.commit("sortAnimesByEpisodes");
    },
    sortseasonCount(){
      this.$store.commit("sortAnimesByseasonCount");
    },
  },
  components: { lists },

  mounted() {
    this.$store.dispatch("getAnimes")
  },

  computed: {
    animes() {
      return this.$store.state.animes?.filter((anime) => {
        let isMatch = true;
        if(!anime.title.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false; 
        }
        if (this.genre !== "All" && this.genre !== anime.genre) {
          isMatch = false;
        }
        if (this.goreLevel !== "All" && this.goreLevel !== anime.goreLevel) {
          isMatch = false;
        }
        if (this.studio !== "All" && this.studio !== anime.studio) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
};
</script>

<style>

</style>