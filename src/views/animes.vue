<template>
  <h2>I am Working</h2>
  <div v-if="animes" class="bg-dark">
    <div class="container">
      <div class="row">
        <lists />
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
      animes: []
    };
  },
  };
</script>

<style>
.card img {
  height: 125px;
  width: 100%;
}
</style>