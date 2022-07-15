<template>
  <div class="home">
    <div id="home" class="container d-flex justify-content-center align-items-center vh-100">
      <div class="d-inline-block">
      <h1 style="color: white; font-size: 5vw; margin-bottom: 1rem" data-aos="fade-up"
     data-aos-duration="2000">
        𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝕿𝖔 𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖊𝖆𝖘𝖔𝖓
      </h1> <br>
      <p id="landingP" class="text-center" style="color: white; word-wrap: break-word; " data-aos="fade-up"
     data-aos-duration="2000">
        Our site is dedicated to the love of Horror and the diverse variations of it. Some of the content displayed may not be suitable for 
        certain users, so by continuing you are gaining acceptance of that risk. Join us when you are ready for the nightmare to begin  
      </p>
      </div>
    </div>
  </div>

  <div style="height: 20vh; margin-top: 5rem;">
    <p style='color: #FF0000; font-size: 60px'>
      𝕽𝖊𝖈𝖊𝖓𝖙𝖑𝖞 𝖆𝖉𝖉𝖊𝖉
    </p>
    <p style="color: white">
      recently added animes to our wide range of options
    </p>
  </div>

 <div>
  <div v-if="animes">
    <div class="container">
      <div class="row">
        <Lists v-for="anime in sorted" :key="anime.id" :anime="anime" />
      </div>
    </div>
    </div>

    <div v-else>
      <h2>
        Loading ...
      </h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Lists from "@/components/lists.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Lists,
  },

  mounted() {
    this.$store.dispatch("getAnimes");
    AOS.init();
  },

  computed: {
    animes() {
      return this.$store.state.animes;
    },
    sorted() {
      // reverses array and limits it to 3
      let sortedA = this.$store.state.animes.reverse();
      return sortedA.slice(0, 3);
    },
  },
};
</script>

<style>
.home {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      #000000 99%
    ),
    url("https://i.postimg.cc/yxgvWZPB/asta-demon-landing.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  background-position: center;
}

#landingP{
  /* -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: black; */
}

</style>