<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
    style="margin-top: 3rem"
  >
    <h1 style="color: #ff0000">𝕺𝖚𝖗 𝕬𝖉𝖒𝖎𝖓𝖘</h1>
    <p style="color: white">
      if you want to contact our admins links are provided to the github and
      email
    </p>

    <div style="width: 30%" class="container">
      <!-- Joshe  -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/65JWNJ68/black-girl.webp" />

          <h3 style="color: white">Joshe</h3>

          <span style="color: #ff0000; font-size: 30px">
            <a href="https://github.com/joshetheys" target="_blank">
              <i class="fa-brands fa-github" style="margin-right: 90px"></i>
            </a>

            <a href="mailto:JosheTheys@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
        </div>

        <!-- Ridhaa  -->
        <div class="carousel-item">
          <img src="https://i.postimg.cc/Jz0trsdp/Ken-Kaneki.jpg" />

          <h3 style="color: white">Ridhaa</h3>

          <span style="color: #ff0000; font-size: 30px">
            <a href="https://github.com/RB664" target="_blank">
              <i class="fa-brands fa-github" style="margin-right: 90px"></i>
            </a>

            <a href="mailto:ridhaabenjamin06@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
        </div>

        <div class="carousel-item">
          <img src="https://i.postimg.cc/dVcvXLc7/Squirtle.jpg" />

          <h3 style="color: white">Charles</h3>

          <span style="color: #ff0000; font-size: 30px">
            <a href="https://github.com/A-SCharles" target="_blank">
              <i class="fa-brands fa-github" style="margin-right: 90px"></i>
            </a>
            <a href="mailto:a.charles.edu@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
        </div>

        <div class="carousel-item">
          <img src="https://i.postimg.cc/W4JCSdLz/hdrs4hh26kd81.jpg" />
          <h3 style="color: white">Xena</h3>
          <span style="color: #ff0000; font-size: 30px">
            <a href="https://github.com/bulelaniskhikhi" target="_blank">
              <i class="fa-brands fa-github" style="margin-right: 90px"></i>
            </a>
            <a href="mailto:bulelaniskhi@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        style="margin-left: 23rem"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        style="margin-right: 23rem"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h3>Write us a message</h3>
    <div class="container-fluid">
      <form action="https://formspree.io/f/xeqnbnjl" method="POST">
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<style>
img {
  width: 300px;
  height: 300px;
}

#carouselcontainer {
  display: flex;
  justify-content: center;
}
</style>