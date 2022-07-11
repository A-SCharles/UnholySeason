<template>

  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-black" style="height: 10vh" >

    <div class="container ">

      <a style="font-size: 3vw; color: #FF0000" class="navbar-brand " href="#">
        𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖊𝖆𝖘𝖔𝖓
      </a>

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

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div class="navbar-nav">

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

          <router-link :to="{ name: 'animes' }">

            <a style="font-size: 30px;" class="nav-link">
              𝖆𝖓𝖎𝖒𝖊𝖑𝖎𝖘𝖙
            </a>

          </router-link>

        </div>
      </div>
    </div>
    
  </nav>

  <router-view />
</template>

<style>
#app {

  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/

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

a{
  text-decoration: none;
  color: #FF0000 !important; 
}

#navbarNavAltMarkup{
  display: flex !important;
  justify-content: end !important;
}
</style>



