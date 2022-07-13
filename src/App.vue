<template>

<<<<<<< HEAD
  <nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-black">
=======
  <!-- navbar -->
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-black" style="height: 10vh; " >
>>>>>>> 3cd26a4e4ffc0dcc4c8fec9c0a6b2c99c3116182

    <div class="container">

      <!-- Navbar Logo -->
      <router-link to="/">
<<<<<<< HEAD
        <a style="font-size: 3vw; color: #FF0000" class="navbar-brand " href="#">
          𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖊𝖆𝖘𝖔𝖓
        </a>
=======
        <span style="display: flex; align-items: center;">
        <img class="img-fluid" src="https://i.postimg.cc/0jkbPDBf/logo.png" id='logoimg'>

        <a style="font-size: 3vw; color: #FF0000" class="navbar-brand " href="#">
          𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖊𝖆𝖘𝖔𝖓
        </a>

        </span>
        
>>>>>>> 3cd26a4e4ffc0dcc4c8fec9c0a6b2c99c3116182
      </router-link>

      <!-- Collapse Btn -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>

      </button>


      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <!-- navbar page links -->
        <div class="navbar-nav justify-content-between">

          <!-- home page -->
          <router-link to="/">

            <a style="font-size: 30px;" class="nav-link active" aria-current="page" href="#">
              𝕳𝖔𝖒𝖊
            </a>

          </router-link>

          <!-- about page -->
          <router-link to="/about">

            <a style="font-size: 30px;" class="nav-link">
              𝕬𝖇𝖔𝖚𝖙
            </a>

          </router-link>

          <!-- contact page -->
          <router-link to="/contact">

            <a style="font-size: 30px;" class="nav-link">
              𝕮𝖔𝖓𝖙𝖆𝖈𝖙
            </a>

          </router-link>

<<<<<<< HEAD


          <div v-if="!user">
            <router-link :to="{ name: 'login' }">
              <a style="font-size: 30px;" class="nav-link">
                Login
              </a>
            </router-link>

            <router-link :to="{ name: 'register' }">
              <a style="font-size: 30px;" class="nav-link">
                Register
              </a>
            </router-link>
          </div>

          <div v-else>
            <router-link :to="{ name: 'animes' }">
              <a style="font-size: 30px;" class="nav-link">
                𝖆𝖓𝖎𝖒𝖊𝖑𝖎𝖘𝖙
              </a>
            </router-link>
            
            <router-link :to="{name: 'account'}">
              <h2>Hello {{ user.name }}</h2>
            </router-link>
            <button class="btn btn-danger" @click="logout">Logout</button>
          </div>
=======
          <!-- anime list page -->
          <router-link :to="{ name: 'animes' }">
            <a style="font-size: 30px;" class="nav-link">
              𝕬𝖓𝖎𝖒𝖊𝕷𝖎𝖘𝖙
            </a>
          </router-link>

          <!-- login page -->
          <router-link :to="{ name: 'login' }">
            <a style="font-size: 30px;" class="nav-link">
              𝕷𝖔𝖌𝖎𝖓
            </a>
          </router-link>

          <router-link :to="{ name: 'register' }">
            <a style="font-size: 30px;" class="nav-link">
              𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗
            </a>
          </router-link>
>>>>>>> 3cd26a4e4ffc0dcc4c8fec9c0a6b2c99c3116182

        </div>

      </div>

    </div>

  </nav>
  <router-view />

</template>

<script>
<<<<<<< HEAD
import router from '@/router/index'
  
export default {
  mounted() {

  },

  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.state.user = null
      router.push({ name: 'home' })
    }
  },
}
=======

>>>>>>> 3cd26a4e4ffc0dcc4c8fec9c0a6b2c99c3116182
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
<<<<<<< HEAD
=======

.nav-link:hover{
  
  text-shadow: 0px 0px 15px #ff0000;
  
  transition: ease-in-out 0.3s;
}

#logoimg{
  width: 4rem;
  height: 4rem;
}
>>>>>>> 3cd26a4e4ffc0dcc4c8fec9c0a6b2c99c3116182
</style>



