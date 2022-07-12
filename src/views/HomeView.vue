<template>
  <div class="home">
    
  </div>

  <div style="height: 20vh; margin-top: 5rem;">
    <h1 class="fs-1 fw-light" style='color: #FF0000'>Recenty Added</h1>
  </div>

  <hr/>
  


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