<template>
  <div class="container text-center">
    <h1 style="color: red">𝕺𝖚𝖗 𝖀𝖓𝖍𝖔𝖑𝖞 𝕾𝖙𝖔𝖗𝖞</h1>

    <div class="text-white mx-auto w-50">
      <p>What's your favourite season? We like our's a little...Unholy.</p>

      <p>
        The creators of unholy season wanted to create a safe space where lovers
        of gore could find community in each other. So scroll through your
        fellow users recommondations to add to your watch list and recommend
        some the goriest, horrifying anime you know. We want to hear what you
        think, afterall this is a place where even the dead tell stories... So
        remember to comment and interact - no-one likes a dead fish.
      </p>

      <p>Welcome to our nightmare. I think you're gonna like it.</p>

      <p style="color: red">
        P.S. If you are reading this, then you are blissfully unaware of what is
        creeping up behind you.
      </p>
    </div>

    <div style="color: red">
      <h1>⛧ 𝕺𝖚𝖗 𝕻𝖆𝖗𝖙𝖓𝖊𝖗𝖘 𝖎𝖓 𝕮𝖗𝖎𝖒𝖊 ⛧</h1>
    </div>

    <div class="image-group row">
      <!-- Xena -->
      <div class="image col-3">
        <img
          class="image__img"
          src="https://i.postimg.cc/W4JCSdLz/hdrs4hh26kd81.jpg"
          alt="Bricks"
          style="height: 300px"
        />

        <div class="image__overlay image__overlay--blur">
          <div class="image__title" style="color: red">Xena</div>

          <p class="image__description">
            clever as the devil and twice as pretty
          </p>
        </div>
      </div>

      <!-- ridhaa  -->
      <div class="image col-3">
        <img
          class="image__img"
          src="https://i.postimg.cc/Bn03LxRN/ken-kaneki.jpg"
          alt="Bricks"
          style="height: 300px"
        />

        <div class="image__overlay image__overlay--blur">
          <div class="image__title" style="color: red">Ridhaa</div>

          <p class="image__description">
            The silent killer that creeps behind you.
          </p>
        </div>
      </div>

      <!-- Joshe -->
      <div class="image col-3">
        <img
          class="image__img"
          src="https://i.postimg.cc/c4snPzFR/black-girl2.jpg"
          alt="Bricks"
          style="height: 300px"
        />

        <div class="image__overlay image__overlay--blur">
          <div class="image__title" style="color: red">JJ</div>

          <p class="image__description">
            Sugar and spice and your torn up guts are the ingredients to create
            a perfect girl.
          </p>
        </div>
      </div>

      <!-- Charles  -->
      <div class="image col-3">
        <img
          class="image__img"
          src="https://i.postimg.cc/jSyC5Q3x/squirtle2.jpg"
          alt="Bricks"
          style="height: 300px"
        />

        <div class="image__overlay image__overlay--blur">
          <div class="image__title" style="color: red">Charles</div>

          <p class="image__description">
            A kind smile hides the pain of a thousand wounds.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  position: relative;
  object-fit: cover;
  width: 300px;
  height: 300px;
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
  font-family: "Quicksand", sans-serif;
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
