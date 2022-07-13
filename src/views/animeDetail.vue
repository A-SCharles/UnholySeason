<template>
  <div v-if="anime">
    <div class="container h-100">
      <div
        id="test"
        class="row h-100 d-flex justify-content-center align-items-center"
      >
        <div class="card p-3 bg-black text-white">

          <div class=" mb-3" style="background-color: red;" data-aos="fade-down"  data-aos-duration="1000">
            <p style="font-size: 30px" >𝖆𝖓𝖎𝖒𝖊 𝖎𝖓𝖋𝖔</p>
          </div>
          
          <div class="row" >
            <div class="col-5" data-aos="fade-right" data-aos-duration="1000" style="margin-top: 2rem">
              <img id="img" :src="anime.desc_image"/>
            </div>

            <div class="col-7 mx-auto" data-aos="fade-left" data-aos-duration="1000">
              <div class="card-body">
                <h3 class="card-title" style="color: red;">{{ anime.name }}</h3>
                <p class="card-text text-start d-flex flex-wrap" >{{ anime.description }}</p>
                <p class="card-text text-start">
                  <strong style="color: red;">Genre: </strong>{{ anime.genre }}
                </p>
                <p class="card-text text-start">
                  <strong style="color: red;">Released: </strong>{{ anime.dateAired }}
                </p>
                <p class="card-text text-start">
                  <strong style="color: red;">Episodes: </strong>{{ anime.Episodes }}
                </p>
                <p class="card-text text-start">
                  <strong style="color: red;">Seasons: </strong>{{ anime.seasonCount }}
                </p>
                <p class="card-text text-start">
                  <strong style="color: red;">Status: </strong>{{ anime.status }}
                </p>
                <p class="card-text text-start">
                  <strong style="color: red;">Alternate Names: </strong>{{ anime.alternative }}
                </p>
              </div>
            </div>
          </div>

          <div class="trailer" style="margin-top: 3rem">

            <div class=" mb-3" style="height: 4rem; background-color: red;" data-aos="fade-up" data-aos-duration="1000">
              <p style="font-size: 30px">𝖆𝖓𝖎𝖒𝖊 𝖙𝖗𝖆𝖎𝖑𝖊𝖗</p>
            </div>

            <div style="margin-top: 3rem">
              <iframe
                width="100%"
                height="520,88"
                :src="anime.trailer"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                data-aos="fade-up" data-aos-duration="1000"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      <div></div>
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      anime: null,
    };
  },
  async mounted() {
    await fetch("http://localhost:3000/anime/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.anime = data));
      console.log(AOS);
      AOS.init();
  },
};
</script>

<style>
#img {
  /* aspect-ratio: 1; */
  width: 75%;
  min-height: 100%;

  transition: transform .2s; /* Animation */
}

#img:hover{
  transform: scale(1.1); 

}
#test {
  min-height: 95vh;
}

#trailer {
  height: 20rem;
  width: 100%;
}
</style>