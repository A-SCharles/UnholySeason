import { createStore } from 'vuex'

export default createStore({
  state: {
    // variable to store data from JSON
    animes: null
  },
  getters: {
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
      // .then((data) => (context.state.animes = data))
      // .catch((err) => console.log(err));
    }
  },
  modules: {
  }
})
