<template>

  <!-- anime list div  -->
  <div
    class="card text-center mx-auto m-5 p-0"
    style="width: 35rem; position: relative; height: 350px; margin-bottom: 40px; "
  >
    <!-- anime list info -->
    <router-link :to="{ name: 'anime', params: { id: anime.docid } }">
      <!-- anime cover gif  -->
      <img
        :src="anime.gif"
        id="show"
        class="card-img-top img-fluid"
        style="height: 350px; object-fit: cover; width: 100%"
      />

      <!-- anime cover logo  -->
      <img
        :src="anime.logo"
        id="hide"
        class="card-body img-fluid p-0"
      />

      <!-- anime body display  -->
      <div class="card-body">
        <h5 class="card-title">{{ anime.title }}</h5>
        <p class="card-text"></p>
      </div>
    </router-link>
  </div>
</template>

<script>
// import store from "@/store";

export default {
  props: ["anime"],
};

AOS.init();
</script>

<style scoped>
a {
  text-decoration: none;
  color: #ff0000 !important;
}
.card img {
  height: 125px;
  width: 100%;
}

#show {
  position: relative;
  margin-top: -1px !important;
  margin-right: -2px !important;
  margin-left: -2px !important;

  border-radius: 20px;
}

#hide {
  background-color: rgba(0, 0, 0, 0.537);
  color: black;
  position: absolute;
  top: -33px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s linear;

  height: 350px !important; 
  width: 558px  !important;
  border-radius: 20px;
}

#hide:hover {
  opacity: 1;
}

.card {
  background-color: rgba(255, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
