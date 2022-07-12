import { createStore } from 'vuex'

export default createStore({
  state: {
    // variables to store data from JSON
    animes: null,
    anime: null,
    user: null
  },
  getters: {
    
  },
  mutations: {
    // passes retrieved data into animes variable
    setAnimes:(state, animes) => {
      state.animes = animes
    },
    // passes retrieved data into anime variable
    setAnime:(state, anime) => {
      state.anime = anime
    },
    // passes retrieved user into user variable
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {
    // Retrieving all data from JSON file
    getAnimes: async (context)=> {
      fetch("http://localhost:3000/anime")
      .then((res) => res.json())
      .then((animes) => context.commit('setAnimes', animes))
    },
    // Retrieves single object in data 
    getAnime: async (context, id) => {
      fetch("http://localhost:3000/anime/" + id)
      .then((res) => res.json())
      .then((anime) => context.commit('setAnime', anime))
    },
    // Checks if user exists in db
    login: async (context, payload) => {
        // vars for email and pass
      
    }
  },
  modules: {
  }
})
