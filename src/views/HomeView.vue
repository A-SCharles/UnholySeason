<template>
  <div class="home">
    <div style="">
      <h1 style="color: white; display: flex; align-content: center">
        welcome to unholy season
      </h1>
       
    </div>
  </div>

  <div style="height: 20vh; margin-top: 5rem;">
    <p class="" style='color: #FF0000; font-size: 60px'>𝕽𝖊𝖈𝖊𝖓𝖙𝖑𝖞 𝖆𝖉𝖉𝖊𝖉</p>
    <p style="color: white">recently added animes to our wide range of options</p>
  </div>

  <hr/>
  
 <div style="height: 100vh">
  this is were the anime go ;)
  
  

 </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home{

  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0) 30%, #000000 99% ), url('https://i.postimg.cc/yxgvWZPB/asta-demon-landing.gif');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
</style>