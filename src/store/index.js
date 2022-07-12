import { createStore } from 'vuex'

export default createStore({
  state: {
    // variable to store data from JSON
    animes: null
  },
  getters: {
    // sortedArray : state =>  state.animes.reverse()  
  },
  mutations: {
    setAnimes:(state, animes) => {
      state.animes = animes
    }
  },
  actions: {
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
