<template>

  <div v-if="anime">

    <div class="container h-100">

      <div id="test" class="row h-100 d-flex justify-content-center align-items-center">

        <div class="card p-3 bg-black text-white">

          <!-- anime info banner -->
          <div class=" mb-3 w-100" style="background-color: red;">

            <p style="font-size: 30px" >𝖆𝖓𝖎𝖒𝖊 𝖎𝖓𝖋𝖔</p>

          </div>
          
          <div class="row" >

            <!-- anime desc image  -->
            <div class="col-5" style="margin-top: 2rem">

              <img id="img" :src="anime.desc_image"/>

            </div>

            <!-- anime information  -->
            <div class="col-7 mx-auto" >

              <!-- anime information -->
              <div class="card-body">

                <!-- anime name -->
                <h3 class="card-title" style="color: red;">
                  {{ anime.name }}
                </h3>

                <!-- anime description  -->
                <p class="card-text text-start d-flex flex-wrap" >
                  {{ anime.description }}
                </p>

                <!-- genre  -->
                <p class="card-text text-start">

                  <strong style="color: red;">
                    Genre: 
                  </strong>
                  
                  {{ anime.genre }}

                </p>

                <!-- date  -->
                <p class="card-text text-start">
                  <strong style="color: red;">
                    Released: 
                  </strong>
                  
                  {{ anime.dateAired }}

                </p>

                <!-- ep -->
                <p class="card-text text-start">
                  <strong style="color: red;">
                    Episodes: 
                  </strong>
                  
                  {{ anime.Episodes }}

                </p>
                
                <!-- seasons  -->
                <p class="card-text text-start">
                  <strong style="color: red;">
                    Seasons: 
                  </strong>
                  
                  {{ anime.seasonCount }}

                </p>

                <!-- status  -->
                <p class="card-text text-start">
                  <strong style="color: red;">
                    Status: 
                  </strong>
                  
                  {{ anime.status }}

                </p>

                <!-- alt names  -->
                <p class="card-text text-start">
                  <strong style="color: red;">
                    Alternate Names: 
                  </strong>
                  
                  {{ anime.alternative }}

                </p>

              </div>

            </div>

          </div>

          <div class="trailer w-100" style="margin-top: 3rem">

            <div class=" mb-3 " style="height: 4rem; background-color: red;">
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
              ></iframe>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>

  <!-- if else  -->
  <div v-else>
    <h2>
      Loading...
    </h2>
  </div>
  
</template>

<script>
export default {
  props: ["id"],

  mounted() {
    // Call function created in store
    this.$store.dispatch("getAnime", this.id);

    AOS.init();
  },

  computed: {
    // returns item from function that was called
    anime() {
      return this.$store.state.anime;
    },
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
}
</style>