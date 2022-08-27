import {
  createStore
} from "vuex";
import router from "@/router/index";
export default createStore({
  state: {
    // variables to store data from JSON
    animes: null,
    anime: null,
    users: null,
    user: null,
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
    getUsers: async (context) => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data.results));
    },
    // Retrieving all data from JSON file
    getAnimes: async (context) => {
      await fetch("http://localhost:3000/animes")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setAnimes", data.results)
        });;
    },
    // dunno
    // Retrieves single object in data
    getAnime: async (context, id) => {
      fetch("http://localhost:3000/animes/" + id)
        .then((res) => res.json())
        .then((data) => {
          let dummy = data.results
          let anime = {
            title: dummy[0].title,
            logo: dummy[0].logo,
            descimage: dummy[0].descimage,
            gif: dummy[0].gif,
            alternate: dummy[0].alternate,
            description: dummy[0].description,
            episodes: dummy[0].episodes,
            seasons: dummy[0].seasons,
            gorelevel: dummy[0].gorelevel,
            genre: dummy[0].genre,
            status: dummy[0].status,
            Studios: dummy[0].Studios,
            trailer: dummy[0].trailer
          }
          context.commit("setAnime", anime);
        });
    },
    // Checks if user exists in db
    login: async (context, payload) => {
      fetch(`http://localhost:3000/users`, {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === "Login Successful") {
            alert(data.msg)
            context.commit("setUser", data.results);
            router.push({
              name: "animes"
            });
          } else {
            alert(data.msg)
          }
        })
    },

    // adds new user to db
    register: async (context, payload) => {
      fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // context.commit("setUser", data)
        });
      router.push({
        name: "animes"
      });
    },
    // Deletes Item from db
    deleteAnime: async (context, id) => {
      fetch("http://localhost:3000/animes/" + id, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => (context.dispatch("getAnimes")));
    },
    // adds anime from modal in account page
    addAnime: async (context, anime) => {
      fetch("http://localhost:3000/animes/", {
          method: "POST",
          body: JSON.stringify(
            anime
          ),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then(() => (context.dispatch("getAnimes")))
    },
    // updates list
    updateAnime: async (context, anime) => {
      fetch("http://localhost:3000/animes/" + anime.id, {
          method: "PUT",
          body: JSON.stringify(anime),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
          (context.dispatch("getAnimes"))
        });
    }
  },
  modules: {

  }
});