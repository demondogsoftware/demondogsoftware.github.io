<template>
  <section class="container">
    <article class="home--hero-container">
      <img src="" alt="demon dog software image with company name" class="home--hero-img">
      <div class="home--hero-text">
        <h1>
          Demon Dog Software
        </h1>
        <p>
          Coding Dreams Into Reality
          <br>
          Web development tailored to YOUR business needs
        </p>
        <a href="#contact-form" class="contact--btn"><span class="contact--icon" />Contact</a>
      </div>
    </article>
    <article class="home--services-container">
      <img src="" alt="services picture 1 placeholder">
      <div class="home--services-text">
        <h2>
          Custom Coded Solutions
        </h2>
        <p>
          Every business is different, so your website shouldn’t feel like every other business. We will create a custom website using the latest web development tools that will address all your business needs while providing a one-of-a-kind customer experiance for your customers.
        </p>
        <nuxt-link to="/portfolio" class="portfolio--btn">
          <span class="portfolio--icon" />
          Portfolio
        </nuxt-link>
      </div>
      <div class="home--services-text">
        <h2>
          One Stop Tech Shop
        </h2>
        <p>
          When working with us you can focus on your business
        </p>
      </div>
      <div class="home--services-cards">
        <div class="service--card">
          <img src="" alt="service image placeholder">
          <p>DNS / Hosting</p>
        </div>
        <div class="service--card">
          <img src="" alt="service image placeholder">
          <p>Database Services</p>
        </div>
        <div class="service--card">
          <img src="" alt="service image placeholder">
          <p>SEO / Social</p>
        </div>
        <div class="services--btn-container">
          <nuxt-link to="/services" class="services--btn">
            <span class="services--icon" />
            Services
          </nuxt-link>
        </div>
      </div>
      <img src="" alt="services picture 2 placeholder">
    </article>
    <article id="contact-form" class="home--contact-container">
      <div class="home--contact-text">
        <h2>
          CONTACT US
        </h2>
        <p>
          Want a price quote or have questions regarding services?
          <br>
          Do you have an idea or project you want to bring to lfe?
        </p>
      </div>
      <img src="" alt="home contact image placeholder">
      <ContactForm />
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style>

.home--hero-text,
.home--services-text,
.home--contact-text {
  margin: 2rem 0;
}

.home--hero-text p,
.home--services-text p,
.service--card,
.home--contact-text p {
  margin: 1.5rem 0;
}

.services--btn-container {
  margin-bottom: 1.5rem;
}
</style>
