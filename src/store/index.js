import { createStore } from "vuex";
import router from "@/router/index";
export default createStore({
  state: {
    // variables to store data from JSON
    animes: null,
    anime: null,
    users: null,
    user: null,
  },
  getters: {},
  mutations: {
    // passes retrieved data into animes variable
    setAnimes: (state, animes) => {
      state.animes = animes;
    },
    // passes retrieved data into anime variable
    setAnime: (state, anime) => {
      state.anime = anime;
    },
    // passes retrieved user into user variable
    setUser: (state, user) => {
      state.user = user;
    },
    //
    // passes retrieved user into user variable
    setUsers: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    // Shows all users
    getUsers: async (context) => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    // Retrieving all data from JSON file
    getAnimes: async (context) => {
      fetch("http://localhost:3000/anime")
        .then((res) => res.json())
        .then((animes) => context.commit("setAnimes", animes));
    },
    // Retrieves single object in data
    getAnime: async (context, id) => {
      fetch("http://localhost:3000/anime/" + id)
        .then((res) => res.json())
        .then((anime) => context.commit("setAnime", anime));
    },
    // Checks if user exists in db
    login: async (context, payload) => {
      // vars for email and pass
      // tbh idk wtoif
      const { email, password } = payload;
      // putting data from fetch in var, I think
      const data = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      //converting that data to GOAT format
      const userData = await data.json();
      if (userData.length) {
        context.commit("setUser", userData[0]);
        router.push({ name: "animes" });
      } else {
        router.push({ name: "home" });
      }
    },

    // adds new user to db
    register: async (context, payload) => {
      const { name, email, password } = payload;
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
      router.push({ name: "animes" });
    },
    // Deletes Item from db
    deleteAnime: async (context, id) => {
      fetch("http://localhost:3000/anime/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => (context.dispatch("getAnimes")));
    },
    // adds anime from modal in account page
    addAnime: async (context, anime) => {
      fetch("http://localhost:3000/anime/", {
        method: "POST",
        body: JSON.stringify(
          anime
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() =>(context.dispatch("getAnimes"))) 
    }
  },
  modules: {

  },
});
