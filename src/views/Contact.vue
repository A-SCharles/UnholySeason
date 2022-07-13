<template>
<div class="container">
<h3>Want to recommend an anime but don't know how?</h3>
<p>Message one of our admins and they'll upload the anime for you or </p>
<h3>Found a bug in the site please contact one of our admins or send a message to the email below</h3>
<p>unholyseason@gmail.com</p>
</div>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <h1>Our Admins</h1>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/c4snPzFR/black-girl2.jpg" alt="...">
      <h3>JT</h3>
      blackgirl@gmail.com
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/Jz0trsdp/Ken-Kaneki.jpg" alt="...">
      <h3>RB</h3>
      kenkaneki@gmail.com
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/jSyC5Q3x/squirtle2.jpg" alt="...">
      <h3>AS</h3>
      Squirtle@gmail.com
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/W4JCSdLz/hdrs4hh26kd81.jpg" alt="...">
      <h3>XS</h3>
      vampire@gmail.com
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h3>Wrtie us a message</h3>
<div class="container-fluid">
<form
  action="https://formspree.io/f/xeqnbnjl"
  method="POST"
>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <button type="submit">Send</button>
</form>
</div>

</template>

<style>
img{
    width: 300px;
    height: 300px;
}

.container-fluid{
  width: 295px;
  height: 200px;
  background-color: rgb(60, 60, 60);
  color: white;
}

textarea{
  width: 250px;
  height: 130px;
}

#carouselExampleControls{
width: 400px; 
/* background-color: blue; */
margin-left: 560px ;
}

.container{
  text-align: start;
}
.carousel-control-prev{
  margin-right: 25px;
}
.carousel-control-next{
  margin-left: 25px;
}

</style>
