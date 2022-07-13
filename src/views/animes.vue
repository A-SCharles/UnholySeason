<template>
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
  components: { lists },

  mounted() {
    this.$store.dispatch("getAnimes")
  },

  computed: {
    animes() {
      return this.$store.state.animes
    }
  }
};
</script>

<style>

</style>