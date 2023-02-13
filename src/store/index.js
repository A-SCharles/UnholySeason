import { createStore } from "vuex";
import router from "@/router/index";
import {
  deleteData,
  getData,
  getDoc,
  getSingle,
  getTable,
  setData,
  setDataDoc,
  updateData,
} from "./firebase_conn/queries";
import bcrypt from "bcryptjs";
export default createStore({
  state: {
    // variables to store data from JSON
    animes: null,
    anime: null,
    users: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    asc: true,
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
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    //
    // passes retrieved user into user variable
    setUsers: (state, users) => {
      state.users = users;
    },
    sortAnimesByEpisodes: (state) => {
      state.animes.sort((a, b) => {
        return a.Episodes - b.Episodes;
      });
      if (!state.asc) {
        state.animes.reverse();
      }
      state.asc = !state.asc;
    },
    sortAnimesByseasonCount: (state) => {
      state.animes.sort((a, b) => {
        return a.seasonCount - b.seasonCount;
      });
      if (!state.asc) {
        state.animes.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    // Shows all users
    getUsers: async (context) => {},
    // Retrieving all data from JSON file
    getAnimes: async (context) => {
      let data = await getTable("animes");
      context.commit("setAnimes", data);
    },
    // Retrieves single object in data
    getAnime: async (context, id) => {
      let data = await getSingle("animes", id);
      context.commit("setAnime", data);
    },
    // Checks if user exists in db
    login: async (context, payload) => {
      let data = await getTable("users");

      if (data.length > 0) {
        let i;
        let match;
        for (let index = 0; index < data.length; index++) {
          if (payload.email === data[index].email) {
            i = index;
            console.log(i);
            console.log("email verified");
          } else {
            console.log("incorrect email");
          }
        }
        match = await bcrypt.compare(payload.password, data[i].password);
        if (match) {
          console.log("Correct Password");
          let user = data[i];
          context.commit("setUser", user);
          router.push("animes");
        } else {
          console.log("Incorrect Password");
        }
      }
    },

    // adds new user to db
    register: async (context, payload) => {
      let check = await getTable("users");
      let match = true;
      let msg = "";
      for (let i = 0; i < check.length; i++) {
        if (check[i].email == payload.email) {
          match = false;
          msg = "Email Address Exists";
          console.log(msg);
        }
      }

      if (match) {
        payload.password = await bcrypt.hash(payload.password, 10);
        console.log(payload);
        await setData("users", payload);
      }

      // getDoc('users');
    },
    // Deletes Item from db
    deleteAnime: async (context, id) => {
      console.log(id);
      deleteData('animes', id)
      context.dispatch('getAnimes')
    },
    // adds anime from modal in account page
    addAnime: async (context, anime) => {
      setData('animes', anime)
      context.dispatch('getAnimes')
    },
    // updates list
    updateAnime: async (context, anime) => {
      updateData('animes', anime)
      context.dispatch('getAnimes')
    },
  },
  modules: {},
});
