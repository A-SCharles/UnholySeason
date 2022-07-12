import { createStore } from 'vuex'

export default createStore({
  state: {
    // variables to store data from JSON
    animes: null,
    anime: null,
    users: null
  },
  getters: {
    
  },
  mutations: {
    // passes retrieved data into animes variable
    setAnimes:(state, animes) => {
      state.animes = animes
    },
    setAnime:(state, anime) => {
      state.anime = anime
    }
  },
  actions: {
    getAnime(context, payload){
      context.commit('setAnime',payload.anime)
    },
    // Retrieving data from JSON file
    getData:context => {
      fetch("http://localhost:3000/anime")
      .then((res) => res.json())
      .then((animes) => context.commit('setAnimes', animes))
    }
  },
  modules: {
  }
})
