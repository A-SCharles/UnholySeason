<template>
  <nav class="navbar sticky-top navbar-expand-sm bg-black">
    <div class="container">
      <!-- Navbar Logo -->
      <router-link to="/">
        <span style="display: flex; align-items: center">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/0jkbPDBf/logo.png"
            id="logoimg"
          />

          <!-- <a style="font-size: 3vw; color: #FF0000" class="navbar-brand " href="#">
          𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖊𝖆𝖘𝖔𝖓
        </a> -->
        </span>
      </router-link>

      <!-- Collapse Btn -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <!-- navbar page links -->
        <div class="navbar-nav">
          <!-- home page -->
          <!-- <router-link to="/">

            <a style="font-size: 30px;" class="nav-link active" aria-current="page" href="#">
              𝕳𝖔𝖒𝖊
            </a>

          </router-link> -->

          <div v-if="!user" class="d-sm-flex d-inline-block">
            <router-link :to="{ name: 'login' }">
              <a style="font-size: 30px" class="nav-link"> 𝕷𝖔𝖌𝖎𝖓 </a>
            </router-link>
          </div>

          <div v-else class="d-flex align-items-center">
            <!-- about page -->
            <router-link to="/about">
              <a style="font-size: 30px" class="nav-link"> 𝕬𝖇𝖔𝖚𝖙 </a>
            </router-link>

            <!-- contact page -->
            <router-link to="/contact">
              <a style="font-size: 30px" class="nav-link"> 𝕮𝖔𝖓𝖙𝖆𝖈𝖙 </a>
            </router-link>

            <!-- anime list page -->
            <router-link :to="{ name: 'animes' }">
              <a style="font-size: 30px;" class="nav-link"> 𝕬𝖓𝖎𝖒𝖊𝕷𝖎𝖘𝖙 </a>
            </router-link>

            <router-link :to="{ name: 'account' }">
              <p style="font-size: 30px; display: flex; align-items: center; margin: 0; float: right;">
                 <i class="fa-solid fa-user"></i> {{ user.name }}
              </p>
            </router-link>

            <button id="navbtn" @click="logout" style="margin-left: 1rem; border-radius: 20px; padding-right: 20px; padding-left: 20px; background-color: red; ">Logout</button>

          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view />

  
  <p class="text-center" style="color: red;">
©copyright screams of angels 2022 all rights reserved</p>
</template>

<script>
import router from "@/router/index";

export default {
  mounted() {},

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.state.user = null;
      router.push({ name: "home" });
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: red;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none;
  color: #ff0000 !important;
}

.nav-link:hover {
  text-shadow: 0px 0px 15px #ff0000;
  transition: ease-in-out 0.3s;
}

#logoimg {
  width: 4rem;
  height: 4rem;
}

/* i{
  color:white;
  font-size: xx-large;
  margin-left:550px ;
  margin-top: 10px;
} */

canvas {
	display: block;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

navbtn{
  color: black;

}
</style>
