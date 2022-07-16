<template>
  <div v-if="user">
    <div class="container text-center">
    <h2>User: {{ user.name }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Anime Title</th>
            <th scope="col">Genres</th>
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
            <a type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#update'+anime.id"><i
                class="fa-solid fa-pen-to-square"></i></a>

            <!-- Delete -->
            <a class="btn" id="delete" @click="$store.dispatch('deleteAnime', anime.id)"><i
                class="fa-solid fa-trash-can"></i></a>
          </td>
            <UpdateModal :anime="anime" />
        </tr>
      </table>
    </div>
  </div>

  <div v-else class="text-center">
    <h1>Please Login to view Data</h1>
  </div>
  <!--  -->
  <CreateModal />
  <!--  -->
</template>

<script>
import CreateModal from "@/components/createModal.vue";
import UpdateModal from "@/components/updateModal.vue";

export default {
  components: { CreateModal, UpdateModal },
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

<style scoped>
th {
  color: red;
}
td {
  color:  white;
}

i {
  color: red;
}
</style>
