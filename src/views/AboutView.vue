<template>
  <div class="about container">
    <h1  style="color:red">Our Unholy Story</h1>
    <p style="color:white">What's your favourite season? We like our's a little...Unholy. </p>
    <p style="color:white">The creators of unholy season wanted to create a safe space where lovers of gore could find community in each other. So scroll through your fellow users recommondations to add to your watch list and recommend some the goriest, horrifying anime you know. We want to hear what you think, afterall this is a place where even the dead tell stories... So remember to comment and interact - no-one likes a dead fish.</p>
    <p style="color:white">Welcome to our nightmare. I think you're gonna like it.</p> 

    <p style="color:red">P.S. If you are reading this, then you are blissfully unaware of what is creeping up behind you.</p>
  </div>
<h1  style="color:red">Our Partners in Crime</h1>
<div class="image-group">
<div class="image">
    <img class="image__img" src="https://i.postimg.cc/W4JCSdLz/hdrs4hh26kd81.jpg" alt="Bricks">
    <div class="image__overlay image__overlay--blur">
        <div class="image__title">Xena</div>
        <p class="image__description">
            description
        </p>
    </div>
</div>
<div class="image">
    <img class="image__img" src="https://i.postimg.cc/Bn03LxRN/ken-kaneki.jpg" alt="Bricks">
    <div class="image__overlay image__overlay--blur">
        <div class="image__title">Ridhaa</div>
        <p class="image__description">
            The silent killer that creeps behind you.
        </p>
    </div>
</div>
<div class="image">
    <img class="image__img" src="https://i.postimg.cc/c4snPzFR/black-girl2.jpg" alt="Bricks">
    <div class="image__overlay image__overlay--blur">
        <div class="image__title">JJ</div>
        <p class="image__description">
            Sugar and spice and your torn up guts are the ingredients to create a perfect girl.
        </p>
    </div>
</div>
<div class="image">
    <img class="image__img" src="https://i.postimg.cc/jSyC5Q3x/squirtle2.jpg" alt="Bricks">
    <div class="image__overlay image__overlay--blur">
        <div class="image__title">Charles</div>
        <p class="image__description">
            A kind smile hides the gleam of jaggered fangs.
        </p>
    </div>
</div>
</div>
</template>

<style>
.about{
  margin-left: auto;
  margin-right: auto;
}
/* .image-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2);
  grid-gap: 15px;
  padding-left: auto;
  padding-right: auto;
} */
.image {
    position: relative;
    object-fit: cover;
    width: 400px;
    height: 400px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}
.image__img {
    display: block;
    width: 100%;
}

.image__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
}

.image__overlay--blur {
    backdrop-filter: blur(5px);
}

.image__overlay > * {
    transform: translateY(20px);
    transition: transform 0.25s;
}

.image__overlay:hover {
    opacity: 1;
}

.image__overlay:hover > * {
    transform: translateY(0);
}

.image__title {
    font-size: 2em;
    font-weight: bold;
}

.image__description {
    font-size: 1.25em;
    margin-top: 0.25em;
}
</style>

