<template>
  <div v-if="animes">
    <div class="container">
      <div class="row mx-auto">
        <div class="col-6 d-flex justify-content-end">
          <button
            @click="sortEpisodes"
            style="
              padding-left: 20px;
              padding-right: 20px;
              border-radius: 20px;
              background-color: red;
            "
          >
            Sort By Episode Count
          </button>
        </div>

        <div class="col-6">
          <button
            @click="sortseasonCount"
            style="
              padding-left: 20px;
              padding-right: 20px;
              border-radius: 20px;
              background-color: red;
            "
          >
            Sort By Season Count
          </button>
        </div>
      </div>
    </div>

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
  components: { lists },

  data() {
    return {
      search: "",
      area: "All",
      goreLevel: "All",
      studio: "All",
      genre: "",
      
    };
  },

  mounted() {
    this.$store.dispatch("getAnimes");
  },

  // computed: {
  //   animes() {
  //     return this.$store.state.animes;
  //   },
  // },

   computed: {
    animes() {
      return this.$store.state.animes?.filter(anime => {
        let isMatch = true;
        if(!anime.name.toLowerCase().includes(this.search.toLowerCase())) {
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

    animes() {
      return this.$store.state.animes
    }
  },

  methods: {
    sortEpisodes() {
      this.$store.commit("sortAnimesByEpisodes");
    },
    sortseasonCount() {
      this.$store.commit("sortAnimesByseasonCount");
    },
  },
};
</script>

<style></style>
