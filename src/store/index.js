import {
  createStore
} from "vuex";
import router from "@/router/index";
export default createStore({
  state: {
    // variables to store data from JSON
    animes: [{
        id: 1,
        name: "TOMIE",
        alternative: "Tomie, Tomie, Ito Junji: Collection Specials, 富江",
        image: "https://i.postimg.cc/G2R07gt1/Tomie.webp",
        desc_image: "https://i.postimg.cc/SNqTYdfY/89805l.jpg",
        anime_Gif: "https://i.postimg.cc/PJyc5yx7/original.gif",
        description: "Memories, both good and bad, suffuse the high school experience. Whether it's hanging out with friends or cramming for tests, everyone has something they will remember from that time in their lives.At a certain high school, one class is faced with an event that can cause people to look back on their high school days in sadness: the death of a student.The deceased is not just any student— she 's Tomie Kawakami, a popular girl with an almost otherworldly beauty. Her death was particularly gruesome: her body was dismembered and the pieces scattered. As the class tries to make sense of the situation, they are shocked when a familiar voice calls out to them from the doorway, apologizing for being late. With raven hair and a beauty mark under her left eye, this girl is the spitting image of their murdered classmate. But she can 't actually be Tomie, right?",
        Episodes: 2,
        seasonCount: 0,
        goreLevel: 4,
        genre: "Drama, Horror, Supernatural, Josei",
        status: "Complete",
        studio: "Studio Deen",
        dateAired: "Apr 27, 2018 to May 25, 2018",
        trailer: "https://www.youtube.com/embed/YCmt4EF_e-k"
      },
      {
        id: 2,
        name: "TOKYO GHOUL",
        image: "https://i.postimg.cc/pdNpsxtc/Tokyo-Logo-Transparent.png",
        desc_image: "https://i.postimg.cc/XJ21Tj7b/Tokyo-Ghoul.jpg",
        anime_Gif: "https://i.postimg.cc/zfC2XNxB/9b75cb1f88ffbc94392e73148bce9a52.gif",
        alternative: "Tokyo Ghoul, Tokyo Ghoul, Tokyo Kushu, Toukyou Kushu, Toukyou Ghoul, 東京喰種-トーキョーグール-",
        description: "Tokyo has become a cruel and merciless city—a place where vicious creatures called 'ghouls' exist alongside humans. The citizens of this once great metropolis live in constant fear of these bloodthirsty savages and their thirst for human flesh. However, the greatest threat these ghouls pose is their dangerous ability to masquerade as humans and blend in with society. Based on the best-selling supernatural horror manga by Sui Ishida, Tokyo Ghoul follows Ken Kaneki, a shy, bookish college student, who is instantly drawn to Rize Kamishiro, an avid reader like himself. However, Rize is not exactly who she seems, and this unfortunate meeting pushes Kaneki into the dark depths of the ghouls' inhuman world. In a twist of fate, Kaneki is saved by the enigmatic waitress Touka Kirishima, and thus begins his new, secret life as a half-ghoul/half-human who must find a way to integrate into both societies.",
        Episodes: 12,
        seasonCount: 4,
        goreLevel: 5,
        genre: "Action, Mystery, Drama, Horror, Supernatural, Psychological, Seinen",
        status: "Complete",
        studio: "Studio Pierrot",
        dateAired: "Jul 4, 2014 to Sep 19, 2014",
        trailer: "https://www.youtube.com/embed/vGuQeQsoRgU?start=5"
      },
      {
        id: 3,
        name: "ELFEN LIED",
        image: "https://i.postimg.cc/y811fdJN/Elfen-Lied-Logo-svg.png",
        desc_image: "https://i.postimg.cc/vTtrpXv6/elfen-lied.jpg",
        anime_Gif: "https://i.postimg.cc/pTjMR4gX/elfen-lied.gif",
        alternative: "Elfen Lied, Elfen Lied, Elfen Song, Elfic Song, エルフェンリート",
        description: "Lucy is a special breed of human referred to as 'Diclonius', born with a short pair of horns and invisible telekinetic hands that lands her as a victim of inhumane scientific experimentation by the government. However, once circumstances present her an opportunity to escape, Lucy, corrupted by the confinement and torture, unleashes a torrent of bloodshed as she escapes her captors. During her breakout, she receives a crippling head injury that leaves her with a split personality: someone with the mentality of a harmless child possessing limited speech capacity. In this state of instability, she stumbles upon two college students, Kouta and his cousin Yuka, who unknowingly take an injured fugitive into their care, unaware of her murderous tendencies. This act of kindness will change their lives, as they soon find themselves dragged into the shadowy world of government secrecy and conspiracy.",
        Episodes: 13,
        seasonCount: 2,
        goreLevel: 5,
        genre: "Action, Drama, Horror, Romance, Supernatural, Psychological, Seinen",
        status: "Complete",
        studio: "Arms",
        dateAired: "Jul 25, 2004 to Oct 17, 2004",
        trailer: "https://www.youtube.com/embed/rFZKXUg8PiU"
      },
      {
        id: 4,
        name: "CORPSE PARTY",
        image: "https://i.postimg.cc/NMxCCJhZ/2162aa360552823da93fca82bf2a26f0.png",
        desc_image: "https://i.postimg.cc/NMbW7hyK/Corpse-Party-Game-Icon.png",
        anime_Gif: "https://i.postimg.cc/Zqphh1kY/corpse-party.gif",
        alternative: "Corpse Party: Tortured Souls (Uncensored), Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou (Uncensored), Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou, コープスパーティー Tortured Souls -暴虐された魂の呪叫-",
        description: "Nine students gather in their high school at night to bid farewell to a friend. As is customary among many high school students, they perform a sort of ritual for them to remain friends forever, using small paper charms shaped like dolls. However, the students do not realize that these charms are connected to Heavenly Host Academy—an elementary school that was destroyed years ago after a series of gruesome murders took place, a school that rests under the foundation of their very own Kisaragi Academy. Now, trapped in an alternate dimension with vengeful ghosts of the past, the students must work together to escape—or join the spirits of the damned forever. A feast for mystery fanatics, gore-hounds, and horror fans alike, Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou shows a sobering look at redemption, sacrifice, and how the past is always right behind, sometimes a little too close for comfort.",
        Episodes: 4,
        seasonCount: 2,
        goreLevel: 5,
        genre: "Mystery, Horror, Supernatural",
        status: "Complete",
        studio: "Asread",
        dateAired: "Jul 24, 2013",
        trailer: "https://www.youtube.com/embed/weMxaz2KqHk"
      },
      {
        id: 5,
        name: "ANOTHER",
        image: "https://i.postimg.cc/8znW1hG9/another-1-removebg-preview.png",
        desc_image: "https://i.postimg.cc/15yb730f/7-Fj-Nr668-WLVLGJZE3-Cmw-Xgztj6s.jpg",
        anime_Gif: "https://i.postimg.cc/3xwcBzrf/another.gif",
        alternative: "Another, Another, アナザー",
        description: "In 1972, a popular student in Yomiyama North Middle School's class 3-3 named Misaki passed away during the school year. Since then, the town of Yomiyama has been shrouded by a fearful atmosphere, from the dark secrets hidden deep within.Twenty-six years later, 15-year-old Kouichi Sakakibara transfers into class 3-3 of Yomiyama North and soon after discovers that a strange, gloomy mood seems to hang over all the students. He also finds himself drawn to the mysterious, eyepatch-wearing student Mei Misaki; however, the rest of the class and the teachers seem to treat her like she doesn't exist. Paying no heed to warnings from everyone including Mei herself, Kouichi begins to get closer not only to her, but also to the truth behind the gruesome phenomenon plaguing class 3-3 of Yomiyama North. Another follows Kouichi, Mei, and their classmates as they are pulled into the enigma surrounding a series of inevitable, tragic events—but unraveling the horror of Yomiyama may just cost them the ultimate price",
        Episodes: 12,
        seasonCount: 1,
        goreLevel: 5,
        genre: "Mystery, Horror, School, Supernatural, Thriller",
        status: "Complete",
        studio: "P.A. Works",
        dateAired: "Jan 10, 2012 to Mar 27, 2012",
        trailer: "https://www.youtube.com/embed/_U_57mzfjB4"
      },
      {
        id: 6,
        name: "Blood-C",
        image: "https://i.postimg.cc/x143cCbj/blood-c-518e357e03330.png",
        desc_image: "https://i.postimg.cc/4N5vwJw4/o-Fegavhx-I30-ISV0j-SD6q-Avuson1.jpg",
        anime_Gif: "https://i.postimg.cc/8C9sy8R1/blood-c.gif",
        alternative: "BLOOD-C, Blood-C, Blood-C, ブラッドシー",
        description: "Peaceful schoolgirl by day, fearsome monster slayer by night, Saya Kisaragi is leading a split life. Equipped with a ceremonial sword given to her by her father for sacred tasks, she vanquishes every monster who dares threaten her quiet little village. But all too soon, Saya's reality and everything she believes to be true is tested, when she overhears the monsters speak of a broken covenant— something she knows nothing about.And then, unexpectedly, a strange dog appears;it asks her to whom she promised to protect the village, curious as to what would happen if she were to break that promise.Tormented by unexplainable visions and her world unraveling around her, we travel with Saya through her struggle to find a way to the truth in a village where nothing is as it seems.",
        Episodes: 12,
        seasonCount: 1,
        goreLevel: "3",
        genre: "Action, Mystery, Horror, School, Vampire, Supernatural",
        status: "Complete",
        Studios: "Production I.G",
        dateAired: "Jul 8, 2011 to Sep 30, 2011",
        trailer: "https://www.youtube.com/embed/hkfUcgXKiw0"
      },
      {
        id: 7,
        name: "When They Cry",
        image: "https://i.postimg.cc/yYq4J51y/when-they-cry-higurashi-5c7dfbf1dd495.png",
        desc_image: "https://i.postimg.cc/TPXRw6Mm/MV5-BZDlj-Zj-Jj-MWUt-Ym-I3-NC00-Mzcx-LTll-ZWIt-Mjc4-Nz-Fm-Mz-Rj-Mz-Ew-Xk-Ey-Xk-Fqc-Gde-QXVy-MTA3-OTEy-ODI1-V1-FMjpg-UX1000.jpg",
        anime_Gif: "https://i.postimg.cc/wMm673ZJ/higurashi-when-they-cry.gif",
        alternative: "Higurashi no Naku Koro ni, When the Cicadas Cry, The Moment the Cicadas Cry, ひぐらしのなく頃に",
        description: "Keiichi Maebara has just moved to the quiet little village of Hinamizawa in the summer of 1983, and quickly becomes inseparable friends with schoolmates Rena Ryuuguu, Mion Sonozaki, Satoko Houjou, and Rika Furude. However, darkness lurks underneath the seemingly idyllic life they lead. As the village prepares for its annual festival, Keiichi learns about the local legends surrounding it. To his horror, he discovers that there have been several murders and disappearances in the village in the recent years, and that they all seem to be connected to the festival and the village's patron god, Oyashiro.Keiichi tries to ask his new friends about these incidents, but they are suspiciously silent and refuse to give him the answers he needs.As more and more bizarre events occur, he wonders just what else his friends might be keeping from him, and if he can even trust them at all.When madness and paranoia begin taking root in Keiichi's heart, he will stumble straight into the mysteries at work in Higurashi no Naku Koro ni, a story that is told across multiple arcs.",
        Episodes: 26,
        seasonCount: 1,
        goreLevel: "5",
        genre: "Dementia, Mystery, Horror, Supernatural, Psychological, Thriller",
        status: "Complete",
        Studios: "Studios Deen",
        dateAired: "Apr 5, 2006 to Sep 27, 2006",
        trailer: "https://www.youtube.com/embed/Kq5BHKn_o_k"
      },
      {
        id: 8,
        name: "From the New World",
        image: "https://i.postimg.cc/KvrGmFPM/maxresdefault-removebg-preview.png",
        desc_image: "https://i.postimg.cc/RCJFd9Qr/image.jpg",
        anime_Gif: "https://i.postimg.cc/sxynZN0c/animesher-com-shinsekai-yori-from-the-new-world-gif-1372716.gif",
        alternative: "Shinsekai yori, Shin Sekai yori, 新世界より",
        description: "In the town of Kamisu 66, 12-year-old Saki Watanabe has just awakened to her psychic powers and is relieved to rejoin her friends—the mischievous Satoru Asahina, the shy Mamoru Itou, the cheerful Maria Akizuki, and Shun Aonuma, a mysterious boy whom Saki admires—at Sage Academy, a special school for psychics. However, unease looms as Saki begins to question the fate of those unable to awaken to their powers, and the children begin to get involved with secretive matters such as the rumored Tainted Cats said to abduct children. Shinsekai yori tells the unique coming-of-age story of Saki and her friends as they journey to grow into their roles in the supposed utopia. Accepting these roles, however, might not come easy when faced with the dark and shocking truths of society, and the impending havoc born from the new world.",
        Episodes: 25,
        seasonCount: 2,
        goreLevel: "1",
        genre: "Mystery, Drama, Horror, Sci-Fi, Supernatural, Psychological",
        status: "Complete",
        Studios: "A-1 Pictures",
        dateAired: "Sep 29, 2012 to Mar 23, 2013",
        trailer: "https://www.youtube.com/embed/WtWiMTDhCUo"
      },
      {
        id: 9,
        name: "Danganronpa: The Animation",
        image: "https://i.postimg.cc/mDv9WRQn/Logo-danganronpa-the-animation.png",
        desc_image: "https://i.postimg.cc/pd7v5hSm/MV5-BNGJj-Mm-Nj-M2-Et-MDAy-Mi00-NTVl-LTk1-OTAt-Yjdh-Mm-Nk-ZTVl-MTNh-Xk-Ey-Xk-Fqc-Gde-QXVy-Mzgx-ODM4-Nj-M-V1-FMjpg-UX1000.jpg",
        anime_Gif: "https://i.postimg.cc/zG3gpFsF/dangonronpa.gif",
        alternative: "Danganronpa:Kibou no Gakuen to Zetsubou no Koukousei-The Animation",
        description: "Hope's Peak Academy is an elite high school that accepts only the most talented students.Individuals who successfully enroll receive their own unique titles, suitably reflective of their skills and traits.Of the fifteen candidates admitted to the peculiar school that year, Makoto Naegi is a completely ordinary individual who has been accepted by sheer chance, with the title of Super High School-Level Luck. Naegi and his fellow classmates are initially ecstatic to be chosen to study at this prestigious institution, but these feelings of happiness are short - lived.They are soon confronted by Monokuma, the principal and resident bear, who traps them inside the school.The pupils hopes of escape and graduation hinge on one of them successfully murdering one of their peers without being discovered. However, if the killer is caught, he or she will be executed, and the remaining survivors will be left to continue the deathmatch until only a single victor remains.",
        Episodes: 13,
        seasonCount: 1,
        goreLevel: "5",
        genre: "Mystery, Horror, School, Psychological",
        status: "Completed",
        Studios: "Lerche",
        dateAired: "Jul 5, 2013 to Sep 27, 2013",
        trailer: "https://www.youtube.com/embed/f-zpL5zZ1ak"
      },
      {
        id: 10,
        name: "Devilman Crybaby",
        image: "https://i.postimg.cc/g2zZWgZG/Logo-Bevil.webp",
        desc_image: "https://i.postimg.cc/pX2dH8Mv/p14946051-b-v13-aa.jpg",
        anime_Gif: "https://i.postimg.cc/s2d5XZLP/devilman-crybaby.gif",
        alternative: "DEVILMAN crybaby",
        description: "Devils cannot take form without a living host. However, if the will of an individual is strong enough, they can overcome the demon and make its power their own, becoming a Devilman. Weak and unassuming, Akira Fudou has always had a bleeding heart. So when his childhood friend Ryou Asuka asks for his help in uncovering devils, Akira accepts without hesitation. However, to Akira's surprise, the place they go to is Sabbath: an immoral party of debauchery and degeneracy.Amidst bloodshed and death, demons possess the partiers, turning their bodies into grotesque monsters, and begin wreaking havoc.In a reckless attempt to save his best friend, Akira unwittingly merges with the devil Amon and becomes a Devilman, gaining the power to defeat the remaining demons.Though it grants him great power, this new partnership awakens an insatiable and primeval part of Akira.Having the body of a devil but the same crybaby heart, Akira works alongside Ryou, destroying those that harm humanity and his loved ones.",
        Episodes: 1,
        seasonCount: 1,
        goreLevel: "3",
        genre: "Action, Dementia, Demons, Horror, Supernatural",
        status: "Complete",
        Studios: "Science SARU",
        dateAired: "Jan 5, 2018",
        trailer: "https://www.youtube.com/embed/ww06yGPM7Kc"
      }
    ],
    anime: null,
    users: [{
        id: 1,
        name: "Charles",
        email: "charles@gmail.com",
        password: "password"
      },
      {
        name: "Abdus-Samad",
        email: "charles@gmail.com",
        password: "pass",
        id: 2
      },
      {
        name: "Boi",
        email: "charles2@gmail.com",
        password: "pass",
        id: 3
      },
      {
        name: "Boii",
        email: "charles3@gmail.com",
        password: "pass",
        id: 4
      },
      {
        name: "xena",
        email: "vampire@gmail.com",
        password: "xena",
        id: 5
      },
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "admin",
        id: 6
      },
      {
        name: "Jared",
        email: "jareds@gmail.com",
        password: "password",
        id: 7
      }
    ],
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
    // Retrieves single object in data
    getAnime: async (context, id) => {
      let anime = context.state.anime
      console.log(context.state.animes[id - 1])
      anime = context.state.animes[id - 1]
      console.log(anime)
      return context.commit("setAnime", anime);
    },

    // Checks if user exists in db
    login: async (context, payload) => {
      // vars for email and pass
      // tbh idk wtoif
      const {
        email,
        password
      } = payload;
      // putting data from fetch in var, I think
      // const data = await fetch(
      //   `http://localhost:3000/users?email=${email}&password=${password}`
      // );
      for (var i = 0; i = users.length; i++) {
        console.log(context.state.users[i])
        if (email == context.state.users[i].email) {
          if (password == context.state.users[i].password) {
            console.log("being called")
            //       context.commit("setUser", userData[0]);
            //   router.push({
            //     name: "animes"
            //   });
            // } else {
            //   router.push({
            //     name: "home"
            //   });
          }
        }
      }
      //converting that data to GOAT format
      // const userData = await data.json();
      // if (userData.length) {
      //   context.commit("setUser", userData[0]);
      //   router.push({
      //     name: "animes"
      //   });
      // } else {
      //   router.push({
      //     name: "home"
      //   });
      // }
    },
    /*
    // Shows all users
    getUsers: async (context) => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    // Retrieving all data from JSON file
    // getAnimes: async (context) => {
    //   fetch("http://localhost:3000/anime")
    //     .then((res) => res.json())
    //     .then((animes) => context.commit("setAnimes", animes));
    // Retrieves single object in data
    // getAnime: async (context, id) => {
    //   fetch("http://localhost:3000/anime/" + id)
    //     .then((res) => res.json())
    //     .then((anime) => context.commit("setAnime", anime));
    // },
    // },
    // Checks if user exists in db
    login: async (context, payload) => {
      // vars for email and pass
      // tbh idk wtoif
      const {
        email,
        password
      } = payload;
      // putting data from fetch in var, I think
      const data = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      //converting that data to GOAT format
      const userData = await data.json();
      if (userData.length) {
        context.commit("setUser", userData[0]);
        router.push({
          name: "animes"
        });
      } else {
        router.push({
          name: "home"
        });
      }
    },

    // adds new user to db
    register: async (context, payload) => {
      const {
        name,
        email,
        password
      } = payload;
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
      router.push({
        name: "animes"
      });
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
        .then(() => (context.dispatch("getAnimes")))
    },
    // updates list
    updateAnime: async (context, anime) => {
      fetch("http://localhost:3000/anime/" + anime.id, {
          method: "PUT",
          body: JSON.stringify(anime),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then(() => (context.dispatch("getAnimes")));
    }
    */
  },
  modules: {

  }
});