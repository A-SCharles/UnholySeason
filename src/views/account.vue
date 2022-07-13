<template>
  <div v-if="user">
    <h2>user: {{ user.name }}</h2>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Anime Title</th>
            <th scope="col">Category</th>
            <th scope="col">
              <a data-bs-toggle="modal" data-bs-target="#addnew" class="btn">
                <i class="fa-regular fa-square-plus"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tr v-for="anime in animes" :key="anime.id">
          <td>{{ anime.id }}</td>
          <td>{{ anime.name }}</td>
          <td>{{ anime.genre }}</td>

          <!-- icons -->
          <td>
            <!-- Update -->
            <a
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#update"
              ><i class="fa-solid fa-pen-to-square"></i
            ></a>

            <!-- Delete -->
            <a
              class="btn"
              id="delete"
              @click="$store.dispatch('deleteAnime', anime.id)"
              ><i class="fa-solid fa-trash-can"></i
            ></a>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <div v-else>
    <h1>Please Login to view Data</h1>
  </div>
  <!--  -->
  <CreateModal/>
  <!--  -->
</template>

<script>
import CreateModal from "@/components/createModal.vue";

export default {
  components: { CreateModal },
  mounted() {
    this.$store.dispatch("getAnimes");
  },
  computed: {
    animes() {
      return this.$store.state.animes;
    },
    // returns value from store
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
