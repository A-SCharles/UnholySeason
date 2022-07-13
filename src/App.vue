<template>

  <nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-black">

    <div class="container">
      <router-link to="/">
        <a style="font-size: 3vw; color: #FF0000" class="navbar-brand " href="#">
          𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖊𝖆𝖘𝖔𝖓
        </a>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>

      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div class="navbar-nav justify-content-between">

          <router-link to="/">

            <a style="font-size: 30px;" class="nav-link active" aria-current="page" href="#">
              𝖍𝖔𝖒𝖊
            </a>

          </router-link>

          <router-link to="/about">

            <a style="font-size: 30px;" class="nav-link">
              𝖆𝖇𝖔𝖚𝖙
            </a>

          </router-link>
          <router-link to="/contact">
            <a style="font-size: 30px;" class="nav-link">
              𝕮𝖔𝖓𝖙𝖆𝖈𝖙
            </a>

          </router-link>


          <router-link :to="{ name: 'animes' }">
            <a style="font-size: 30px;" class="nav-link">
              𝖆𝖓𝖎𝖒𝖊𝖑𝖎𝖘𝖙
            </a>
          </router-link>

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
            <router-link :to="{ name: 'account' }">
              <h2>Hello {{ user.name }}</h2>
            </router-link>
            <button class="btn btn-danger" @click="logout">Logout</button>
          </div>

        </div>
      </div>
    </div>

  </nav>


  <router-view />
</template>

<script>
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
  color: #FF0000 !important;
}
</style>



