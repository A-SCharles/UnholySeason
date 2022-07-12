<template>
  <h2>I am Working</h2>
  <div v-if="animes" class="bg-dark">
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
  // data() {
  //   return {
  //     animes: []
  //   };
  // },
  mounted() {
    this.$store.dispatch("getData")
  },

  computed: {
    animes() {
      return this.$store.state.animes
    }
  }
};
</script>

<style>
.card img {
  height: 125px;
  width: 100%;
}

#show {
  position: relative;
}

#hide {
  background-color: rgba(169, 164, 164, 0.5);
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s linear;
}

#hide:hover {
  opacity: 1;
}
</style>