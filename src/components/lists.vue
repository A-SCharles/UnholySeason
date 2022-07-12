<template>
  <div class="card mx-auto m-3 p-3"  style="width: 18rem">
    <img :src="anime.anime_Gif" id="show" class="card-img-top" alt="..." />
    <img :src="anime.image" id="hide" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ anime.name }}</h5>
      <p class="card-text"></p>
      <router-link :to="{ name: 'anime', params: { id: anime.id } }">
        <a href="#" class="btn btn-primary" @click="getAnime({anime})">Go somewhere</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['anime'],

}
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